"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { useAuth } from "@/context/auth-context"
import { getAvatarUrl } from "@/lib/avatar"
import { MessageSquare, Heart, Plus, Loader2, Pin, Lock, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import RichTextEditor from "@/components/rich-text-editor"
import { toast } from "sonner";
import { motion } from "framer-motion"
import { safeFormatDistance } from "@/lib/dates"
import { apiFetch } from "@/lib/api"


interface ForumPost {
  id: string
  title: string
  content: any
  author: {
    id: string
    username: string
    profile?: { displayName?: string | null; profilePicture?: string | null } | null
  }
  reactions: { emoji: string; userId: string }[]
  _count: { comments: number }
  pinned: boolean
  locked: boolean
  createdAt: string
}

export default function CommunityPage() {
  const router = useRouter()
  const { user, token } = useAuth()
  const [posts, setPosts] = useState<ForumPost[]>([])
  const [loading, setLoading] = useState(true)
  const [showNewPost, setShowNewPost] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newContent, setNewContent] = useState<any>(null)
  const [submitting, setSubmitting] = useState(false)
  const [settings, setSettings] = useState<any>(null)

  useEffect(() => {
    apiFetch('/api/settings')
      .then(data => setSettings(data))
      .catch(() => {})
  }, [])

  const fetchPosts = async () => {
    try {
      const data = await apiFetch('/api/community')
      setPosts(data.posts)
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  useEffect(() => { fetchPosts() }, [])

  const handleCreatePost = async () => {
    if (!newTitle.trim() || !newContent) return
    setSubmitting(true)
    try {
      const post = await apiFetch('/api/community', {
        method: "POST",
        body: JSON.stringify({ title: newTitle, content: newContent }),
      })
      setPosts(prev => [post, ...prev])
      setShowNewPost(false)
      setNewTitle("")
      setNewContent(null)
      toast.success("Your forum post has been created.");
    } catch (e) {
      toast.error("Failed to create post.");
    }
    setSubmitting(false)
  }

  const canPost = settings?.forumEnabled !== false && (
    settings?.forumPostingRole !== "ADMIN" || user?.role === "ADMIN"
  )

  return (
    <div className="min-h-screen bg-background pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <Link href="/portal" className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors mb-1 inline-flex items-center gap-1.5">
              &larr; Back
            </Link>
            <h1 className="text-2xl font-bold text-white tracking-tight mt-1">Community Forum</h1>
            <p className="text-sm text-zinc-500 mt-1">Discussions, announcements, and more.</p>
          </div>
          {user && canPost && (
            <Button onClick={() => setShowNewPost(!showNewPost)} className="h-10 px-5 rounded-lg text-xs font-semibold gap-2 bg-white text-black hover:bg-zinc-200 transition-all">
              <Plus size={16} />
              New Thread
            </Button>
          )}
        </div>

        {showNewPost && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-zinc-800 rounded-xl mb-8 p-6 bg-zinc-900/40"
          >
            <input
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              placeholder="Thread title..."
              className="w-full bg-transparent text-base font-semibold text-white placeholder-zinc-600 outline-none mb-4"
            />
            <RichTextEditor
              content={null}
              onChange={setNewContent}
              placeholder="Write your post..."
            />
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setShowNewPost(false)} className="text-xs text-zinc-500 hover:text-zinc-300 font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-800/50 transition-colors">Cancel</button>
              <Button onClick={handleCreatePost} disabled={submitting || !newTitle.trim() || !newContent} className="h-9 px-5 rounded-lg text-xs font-semibold bg-white text-black hover:bg-zinc-200 gap-2 transition-all">
                {submitting && <Loader2 size={14} className="animate-spin" />}
                Post Thread
              </Button>
            </div>
          </motion.div>
        )}

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-20 rounded-xl bg-zinc-900/40 border border-zinc-800/50 animate-pulse" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-24 border border-zinc-800/50 rounded-xl bg-zinc-900/20">
            <MessageSquare className="w-10 h-10 text-zinc-700 mx-auto mb-3" />
            <p className="text-zinc-500 text-sm font-medium">No threads yet.</p>
            {user && canPost && (
              <p className="text-zinc-600 text-xs mt-1">Be the first to start a discussion.</p>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.025 }}
              >
                <div
                  onClick={() => router.push(`/community/forum/${post.id}`)}
                  className="block rounded-xl border border-zinc-800/60 hover:border-zinc-700/60 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all p-5 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-zinc-800 ring-1 ring-white/5 group-hover:ring-white/10 transition-all">
                      <Image
                        src={getAvatarUrl(post.author.profile?.profilePicture, post.author.username)}
                        alt={post.author.username}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        {post.pinned && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded shrink-0">
                            <Pin size={10} />
                            Pinned
                          </span>
                        )}
                        {post.locked && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-zinc-500 bg-zinc-800/50 px-2 py-0.5 rounded shrink-0">
                            <Lock size={10} />
                            Locked
                          </span>
                        )}
                        <h2 className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors truncate">
                          {post.title}
                        </h2>
                      </div>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-zinc-600">
                        <Link 
                          href={`/profile/${post.author.username}`} 
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                          className="font-semibold text-zinc-400 hover:text-primary transition-colors relative z-10"
                        >
                          {post.author.profile?.displayName || post.author.username}
                        </Link>
                        {(() => {
                          const topRole = (post.author as any).userRoles?.[0]?.role;
                          if (!topRole) return null;
                          return (
                            <span className={`text-[9px] font-black uppercase tracking-widest ${topRole.color}`}>
                              {topRole.name}
                            </span>
                          );
                        })()}
                        <span>&middot;</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={11} />
                          {safeFormatDistance(post.createdAt, { addSuffix: true })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 text-xs text-zinc-600 self-center">
                      <span className="inline-flex items-center gap-1.5">
                        <MessageSquare size={14} className="text-zinc-700" />
                        {post._count?.comments ?? 0}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Heart size={14} className="text-zinc-700" />
                        {post.reactions?.length ?? 0}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
