"use client"

import React, { useEffect, useState, useMemo } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { getAvatarUrl } from "@/lib/avatar"
import { ArrowLeft, Heart, Loader2, Trash2, Lock, MessageSquare, Pin, Shield, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import RichTextRenderer from "@/components/rich-text-renderer"
import RichTextEditor from "@/components/rich-text-editor"
import { toast } from "sonner";
import { motion } from "framer-motion"
import { safeFormatDistance } from "@/lib/dates"
import { apiFetch } from "@/lib/api"


const EMOJIS = ["👍", "❤️", "😂", "🤔", "👎"]

interface Reaction {
  id: string
  emoji: string
  userId: string
}

interface Comment {
  id: string
  content: any
  author: {
    id: string
    username: string
    xboxId?: string
    role: string
    profile?: { displayName?: string | null; profilePicture?: string | null } | null
    userRoles?: { role: { id: string; name: string; color: string; position: number; permissions?: string[] } }[]
  }
  reactions: Reaction[]
  createdAt: string
}

interface ForumPost {
  id: string
  title: string
  content: any
  author: {
    id: string
    username: string
    xboxId?: string
    role: string
    profile?: { displayName?: string | null; profilePicture?: string | null } | null
    userRoles?: { role: { id: string; name: string; color: string; position: number; permissions?: string[] } }[]
  }
  reactions: Reaction[]
  comments: Comment[]
  pinned: boolean
  locked: boolean
  createdAt: string
}

function AuthorBadge({ author }: { author: ForumPost["author"] }) {
  const highestRole = author.userRoles?.[0]?.role
  const roleName = highestRole?.name || (author.role === "ADMIN" ? "Admin" : "Member")
  const roleColor = highestRole?.color || (author.role === "ADMIN" ? "text-amber-400" : "text-zinc-500")

  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/50 min-w-[130px]">
      <Link href={`/profile/${author.username}`} className="relative w-14 h-14 rounded-xl overflow-hidden bg-zinc-800 ring-2 ring-white/5 hover:ring-primary/40 transition-all group">
        <Image
          src={getAvatarUrl(author.profile?.profilePicture, author.username, author.xboxId)}
          alt={author.username}
          fill
          className="object-cover group-hover:scale-110 transition-transform"
        />
      </Link>
      <div className="text-center">
        <Link href={`/profile/${author.username}`} className="text-sm font-semibold text-white leading-tight hover:text-primary transition-colors block">
          {author.profile?.displayName || author.username}
        </Link>
        <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${roleColor} bg-white/[0.03] px-2 py-0.5 rounded mt-1.5 border border-white/5`}>
          {roleName}
        </span>
      </div>
    </div>
  )
}

function AuthorBadgeMobile({ author }: { author: ForumPost["author"] }) {
  const highestRole = author.userRoles?.[0]?.role
  const roleName = highestRole?.name || (author.role === "ADMIN" ? "Admin" : "Member")
  const roleColor = highestRole?.color || (author.role === "ADMIN" ? "text-amber-400" : "text-zinc-500")

  return (
    <div className="flex items-center gap-3 sm:hidden mb-4 pb-4 border-b border-zinc-800/50">
      <Link href={`/profile/${author.username}`} className="relative w-10 h-10 rounded-xl overflow-hidden bg-zinc-800 ring-1 ring-white/5 shrink-0">
        <Image
          src={getAvatarUrl(author.profile?.profilePicture, author.username, author.xboxId)}
          alt={author.username}
          fill
          className="object-cover"
        />
      </Link>
      <div>
        <Link href={`/profile/${author.username}`} className="text-sm font-semibold text-white hover:text-primary transition-colors">
          {author.profile?.displayName || author.username}
        </Link>
        <p className={`text-[9px] font-bold uppercase tracking-wider ${roleColor} mt-0.5`}>
          {roleName}
        </p>
      </div>
    </div>
  )
}

function ReactionBar({ reactions, targetType, targetId, token }: { reactions: Reaction[]; targetType: "post" | "comment"; targetId: string; token: string | null }) {
  const { user } = useAuth()
  const [localReactions, setLocalReactions] = useState(reactions)

  useEffect(() => { setLocalReactions(reactions) }, [reactions])

  const handleReaction = async (emoji: string) => {
    if (!token) return
    const prev = [...localReactions]
    const idx = localReactions.findIndex(r => r.emoji === emoji && r.userId === user?.id)
    if (idx >= 0) {
      setLocalReactions(prev.filter((_, i) => i !== idx))
    } else {
      setLocalReactions(prev => [...prev, { emoji, userId: user!.id, id: "" }])
    }
    try {
      await apiFetch('/api/community/reactions', {
        method: "POST",
        body: JSON.stringify({ emoji, targetType, targetId }),
      })
    } catch {
      setLocalReactions(prev)
    }
  }

  const hasReacted = (emoji: string) => localReactions.some(r => r.emoji === emoji && r.userId === user?.id)
  const getCount = (emoji: string) => localReactions.filter(r => r.emoji === emoji).length

  const hasAny = localReactions.length > 0
  return (
    <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-zinc-800/50">
      {EMOJIS.map(emoji => {
        const count = getCount(emoji)
        const reacted = hasReacted(emoji)
        if (count === 0 && !reacted && !token) return null
        return (
          <button
            key={emoji}
            onClick={() => handleReaction(emoji)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              reacted
                ? "bg-zinc-800 text-white border border-zinc-700"
                : "text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/50 border border-transparent"
            }`}
          >
            <span className="text-sm leading-none">{emoji}</span>
            {count > 0 && <span className="text-[11px]">{count}</span>}
          </button>
        )
      })}
    </div>
  )
}

export default function ForumDetailPage() {
  const { uuid } = useParams()
  const router = useRouter()
  const { user, token } = useAuth()
  const [post, setPost] = useState<ForumPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [commentContent, setCommentContent] = useState<any>(null)
  const [submittingComment, setSubmittingComment] = useState(false)

  const fetchPost = async () => {
    try {
      const data = await apiFetch(`/api/community/${uuid}`)
      setPost(data)
    } catch (e) {
      console.error(e)
      router.push("/community")
    }
    setLoading(false)
  }

  useEffect(() => { if (uuid) fetchPost() }, [uuid])

  const handleAddComment = async () => {
    if (!commentContent || !token) return
    setSubmittingComment(true)
    try {
      await apiFetch(`/api/community/${uuid}/comments`, {
        method: "POST",
        body: JSON.stringify({ content: commentContent }),
      })
      setCommentContent(null)
      fetchPost()
    } catch (e: any) {
      toast.error(e.message || "Failed to add reply.");
    }
    setSubmittingComment(false)
  }

  const handleDeletePost = async () => {
    if (!confirm("Delete this thread?")) return
    try {
      await apiFetch(`/api/community/${uuid}`, {
        method: "DELETE",
      })
      router.push("/community")
    } catch (e) {
      console.error(e)
    }
  }

  const handleDeleteComment = async (commentId: string) => {
    if (!confirm("Delete this reply?")) return
    try {
      await apiFetch(`/api/community/${uuid}/comments/${commentId}`, {
        method: "DELETE",
      })
      fetchPost()
    } catch (e) {
      console.error(e)
    }
  }

  const isAdmin = user?.role === "ADMIN"
  const userPermissions = useMemo(() => {
    if (!user?.userRoles) return [] as string[]
    const perms = new Set<string>()
    for (const ur of user.userRoles) {
      if (ur.role?.permissions && Array.isArray(ur.role.permissions)) {
        for (const p of ur.role.permissions) {
          if (typeof p === 'string') perms.add(p)
        }
      }
    }
    return [...perms]
  }, [user])

  const canDeletePost = isAdmin || userPermissions.includes('forum:delete') || userPermissions.includes('*')
  const canDeleteComment = isAdmin || userPermissions.includes('forum:delete-comment') || userPermissions.includes('*')

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 text-zinc-500 animate-spin" />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-zinc-500 text-sm">Thread not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/community" className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors mb-6 inline-flex items-center gap-1.5">
          <ArrowLeft size={12} />
          Back to Community
        </Link>

        <div className="border border-zinc-800 rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-800">
            <div className="flex items-center gap-2 text-xs text-zinc-600 mb-2">
              <Link href="/community" className="hover:text-zinc-300 transition-colors">Community</Link>
              <span className="text-zinc-700">/</span>
              <span className="text-zinc-400">{post.title}</span>
            </div>
            <h1 className="text-xl font-bold text-white">
              {post.pinned && <Pin size={16} className="inline mr-1.5 text-amber-500 align-middle" />}
              {post.locked && <Lock size={16} className="inline mr-1.5 text-zinc-500 align-middle" />}
              {post.title}
            </h1>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-zinc-600">
              <span className="inline-flex items-center gap-1">
                <MessageSquare size={13} />
                {post.comments.length} {post.comments.length === 1 ? "reply" : "replies"}
              </span>
            </div>
          </div>

          <div>
            <div className="flex gap-6 px-6 py-5">
              <div className="hidden sm:block">
                <AuthorBadge author={post.author} />
              </div>
              <div className="flex-1 min-w-0">
                <AuthorBadgeMobile author={post.author} />
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs text-zinc-600">
                    Posted {safeFormatDistance(post.createdAt, { addSuffix: true })}
                  </p>
                  <div className="flex items-center gap-2">
                    {(isAdmin || canDeletePost || post.author.id === user?.id) && (
                      <button onClick={handleDeletePost} className="text-zinc-700 hover:text-red-400 transition-colors p-1 rounded hover:bg-red-500/10" title="Delete thread">
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                </div>
                <div className="text-sm text-zinc-300 leading-relaxed">
                  <RichTextRenderer content={post.content} />
                </div>
                <ReactionBar reactions={post.reactions} targetType="post" targetId={post.id} token={token} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-semibold text-zinc-400">
              {post.comments.length} {post.comments.length === 1 ? "Reply" : "Replies"}
            </h2>
          </div>

          {user && !post.locked && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-zinc-800 rounded-xl p-5 mb-6 bg-zinc-900/30"
            >
              <RichTextEditor
                content={commentContent}
                onChange={setCommentContent}
                placeholder="Write a reply..."
              />
              <div className="flex justify-end mt-3">
                <Button
                  onClick={handleAddComment}
                  disabled={submittingComment || !commentContent}
                  className="h-9 px-5 rounded-lg text-xs font-semibold bg-white text-black hover:bg-zinc-200 gap-2 transition-all"
                >
                  {submittingComment && <Loader2 size={14} className="animate-spin" />}
                  Post Reply
                </Button>
              </div>
            </motion.div>
          )}

          {post.locked && (
            <div className="flex items-center gap-2 text-xs text-zinc-600 mb-6 pb-4 border-b border-zinc-800/50">
              <Lock size={12} />
              This thread is locked. New replies are disabled.
            </div>
          )}

          {post.comments.length === 0 ? (
            <div className="text-center py-12 border border-zinc-800/50 rounded-xl bg-zinc-900/20">
              <p className="text-sm text-zinc-600">No replies yet.</p>
              {user && !post.locked && (
                <p className="text-xs text-zinc-700 mt-1">Start the conversation.</p>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {post.comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="border border-zinc-800/60 rounded-xl bg-zinc-900/20 hover:bg-zinc-900/30 transition-colors">
                    <div className="flex gap-6 px-5 py-4">
                      <div className="hidden sm:block">
                        <AuthorBadge author={comment.author} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <AuthorBadgeMobile author={comment.author} />
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-xs text-zinc-600">
                            {safeFormatDistance(comment.createdAt, { addSuffix: true })}
                          </p>
                          {(isAdmin || canDeleteComment || comment.author.id === user?.id) && (
                            <button onClick={() => handleDeleteComment(comment.id)} className="text-zinc-700 hover:text-red-400 transition-colors p-1 rounded hover:bg-red-500/10" title="Delete reply">
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                        <div className="text-sm text-zinc-300 leading-relaxed">
                          <RichTextRenderer content={comment.content} />
                        </div>
                        <ReactionBar reactions={comment.reactions} targetType="comment" targetId={comment.id} token={token} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
