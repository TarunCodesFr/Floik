"use client"

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  Search, Trash2, Loader2, Pin, Lock, Unlock, PinOff,
  MessageSquare, ChevronLeft, ChevronRight, ExternalLink, AlertTriangle
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from '@/context/auth-context'
import { toast } from "sonner";
import Image from 'next/image'
import { apiFetch } from '@/lib/api'

interface ForumPost {
  id: string
  title: string
  pinned: boolean
  locked: boolean
  createdAt: string
  author: {
    id: string
    username: string
    role: string
    profile: { displayName: string | null; profilePicture: string | null } | null
  }
  _count: {
    comments: number
    reactions: number
  }
}

interface PaginatedResponse {
  posts: ForumPost[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export default function ForumsAdminPage() {
  const { token } = useAuth()
  const [posts, setPosts] = useState<ForumPost[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [actionLoading, setActionLoading] = useState<string | null>(null)


  const fetchPosts = useCallback(async () => {
    if (!token) return
    setLoading(true)
    try {
      const params = new URLSearchParams({ page: String(page), limit: '20' })
      if (search) params.set('search', search)
      if (statusFilter) params.set('status', statusFilter)
      const data: PaginatedResponse = await apiFetch(`/api/community/admin?${params}`)
      setPosts(data.posts)
      setTotalPages(data.totalPages)
      setTotal(data.total)
    } catch (e) { console.error(e) }
    setLoading(false)
  }, [page, search, statusFilter, token])

  useEffect(() => {
    if (token) fetchPosts()
  }, [token, fetchPosts])

  const handleDelete = async (postId: string, title: string) => {
    if (!confirm(`Delete "${title}"? This action cannot be undone.`)) return
    setActionLoading(postId)
    try {
      await apiFetch(`/api/community/admin/${postId}`, {
        method: 'DELETE',
      })
      toast.success('Forum post removed.')
      fetchPosts()
    } catch (e) {
      toast.error('Failed to delete post.')
    }
    setActionLoading(null)
  }

  const handleTogglePin = async (post: ForumPost) => {
    setActionLoading(post.id)
    try {
      await apiFetch(`/api/community/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify({ pinned: !post.pinned }),
      })
      toast.success(`Post ${post.pinned ? 'unpinned' : 'pinned'}.`)
      fetchPosts()
    } catch (e) {
      toast.error('Failed to toggle pin.')
    }
    setActionLoading(null)
  }

  const handleToggleLock = async (post: ForumPost) => {
    setActionLoading(post.id)
    try {
      await apiFetch(`/api/community/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify({ locked: !post.locked }),
      })
      toast.success(`Post ${post.locked ? 'unlocked' : 'locked'}.`)
      fetchPosts()
    } catch (e) {
      toast.error('Failed to toggle lock.')
    }
    setActionLoading(null)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    fetchPosts()
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-white tracking-tight">Forum Management</h1>
          <p className="text-sm text-zinc-500 font-medium">
            Moderate forum posts, pin announcements, and manage community content.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm text-zinc-500 font-bold">
          <MessageSquare className="size-4" />
          <span>{total} total posts</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <form onSubmit={handleSearch} className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-600" />
            <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search posts by title or author..."
              className="pl-10 bg-zinc-950 border-white/10 rounded-xl h-11"
            />
          </div>
          <Button type="submit" variant="outline" className="border-white/10 rounded-xl h-11 px-5 text-xs font-bold">
            Search
          </Button>
        </form>
        <div className="flex gap-2">
          {['', 'pinned', 'locked'].map(s => (
            <button
              key={s}
              onClick={() => { setStatusFilter(s); setPage(1) }}
              className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                statusFilter === s
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'bg-zinc-950 text-zinc-500 border border-white/5 hover:border-white/20'
              }`}
            >
              {s || 'All'}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="h-20 rounded-2xl bg-zinc-950 border border-white/5 animate-pulse" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="p-24 rounded-3xl border border-dashed border-white/10 text-center space-y-4">
          <MessageSquare className="size-12 text-zinc-800 mx-auto" />
          <p className="text-sm font-bold text-zinc-600">No forum posts found.</p>
          <p className="text-xs text-zinc-700">
            {search || statusFilter ? 'Try different search terms or filters.' : 'The community forum is empty.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map(post => (
            <div
              key={post.id}
              className={`p-5 rounded-2xl border transition-all ${
                post.pinned
                  ? 'bg-amber-500/[0.03] border-amber-500/20'
                  : 'bg-zinc-950 border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  <div className="relative size-9 rounded-full overflow-hidden border border-white/10 shrink-0 mt-0.5">
                    {post.author.profile?.profilePicture ? (
                      <Image src={post.author.profile.profilePicture} alt="" fill className="object-cover" />
                    ) : (
                      <div className="size-full bg-zinc-800 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-zinc-500">
                          {post.author.username[0]?.toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Link
                        href={`/community/forum/${post.id}`}
                        className="text-sm font-bold text-white hover:text-primary transition-colors truncate max-w-md"
                      >
                        {post.title}
                      </Link>
                      {post.pinned && (
                        <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[8px] font-black uppercase tracking-wider">
                          Pinned
                        </span>
                      )}
                      {post.locked && (
                        <span className="px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 text-[8px] font-black uppercase tracking-wider">
                          Locked
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-1.5 text-[10px] text-zinc-600 font-bold">
                      <span>{post.author.username}</span>
                      <span>•</span>
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post._count.comments} comments</span>
                      <span>•</span>
                      <span>{post._count.reactions} reactions</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <Link
                    href={`/community/forum/${post.id}`}
                    target="_blank"
                    className="p-2 rounded-lg text-zinc-600 hover:text-zinc-400 hover:bg-white/5 transition-all"
                  >
                    <ExternalLink className="size-4" />
                  </Link>
                  <button
                    onClick={() => handleTogglePin(post)}
                    disabled={actionLoading === post.id}
                    className={`p-2 rounded-lg transition-all ${
                      post.pinned
                        ? 'text-amber-400 bg-amber-500/10 hover:bg-amber-500/20'
                        : 'text-zinc-600 hover:text-zinc-400 hover:bg-white/5'
                    }`}
                    title={post.pinned ? 'Unpin' : 'Pin'}
                  >
                    {post.pinned ? <PinOff className="size-4" /> : <Pin className="size-4" />}
                  </button>
                  <button
                    onClick={() => handleToggleLock(post)}
                    disabled={actionLoading === post.id}
                    className={`p-2 rounded-lg transition-all ${
                      post.locked
                        ? 'text-rose-400 bg-rose-500/10 hover:bg-rose-500/20'
                        : 'text-zinc-600 hover:text-zinc-400 hover:bg-white/5'
                    }`}
                    title={post.locked ? 'Unlock' : 'Lock'}
                  >
                    {post.locked ? <Unlock className="size-4" /> : <Lock className="size-4" />}
                  </button>
                  <button
                    onClick={() => handleDelete(post.id, post.title)}
                    disabled={actionLoading === post.id}
                    className="p-2 rounded-lg text-zinc-600 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
                    title="Delete"
                  >
                    {actionLoading === post.id
                      ? <Loader2 className="size-4 animate-spin" />
                      : <Trash2 className="size-4" />
                    }
                  </button>
                </div>
              </div>
            </div>
          ))}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="border-white/10 rounded-xl h-10 text-xs font-bold"
              >
                <ChevronLeft className="size-4 mr-1" /> Previous
              </Button>
              <span className="text-xs font-bold text-zinc-500">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="border-white/10 rounded-xl h-10 text-xs font-bold"
              >
                Next <ChevronRight className="size-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
