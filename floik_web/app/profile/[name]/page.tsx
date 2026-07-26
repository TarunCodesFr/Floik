"use client"

import React, { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { getAvatarUrl } from "@/lib/avatar"
import Link from "next/link"
import { Calendar, Shield, AtSign, FileText, ArrowLeft } from "lucide-react"
import { apiFetch } from "@/lib/api"

const ROLE_BADGE_STYLES: Record<string, string> = {
  'text-primary': 'bg-primary/10 border-primary/20 text-primary',
  'text-blue-500': 'bg-blue-500/10 border-blue-500/20 text-blue-500',
  'text-emerald-500': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
  'text-rose-500': 'bg-rose-500/10 border-rose-500/20 text-rose-500',
  'text-amber-500': 'bg-amber-500/10 border-amber-500/20 text-amber-500',
  'text-violet-500': 'bg-violet-500/10 border-violet-500/20 text-violet-500',
  'text-cyan-500': 'bg-cyan-500/10 border-cyan-500/20 text-cyan-500',
  'text-pink-500': 'bg-pink-500/10 border-pink-500/20 text-pink-500',
}

export default function PublicProfilePage() {
  const { name } = useParams()
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)


  useEffect(() => {
    if (!name) return
    setLoading(true)
    apiFetch(`/api/profile/${name}`)
      .then(data => {
        setProfile(data)
        setLoading(false)
      })
      .catch((err) => {
        if (err.status === 404) setNotFound(true)
        setLoading(false)
      })
  }, [name])

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <Link href="/portal" className="inline-flex items-center gap-2 text-[0.6rem] font-black tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors group">
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Portal
        </Link>

        {loading ? (
          <div className="space-y-6">
            <div className="h-64 rounded-3xl bg-card/30 border border-border/10 animate-pulse" />
            <div className="h-48 rounded-3xl bg-card/30 border border-border/10 animate-pulse" />
          </div>
        ) : notFound ? (
          <div className="text-center py-32 space-y-6">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center">
              <FileText className="w-10 h-10 text-zinc-600" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-black text-foreground tracking-tight">User Not Found</h1>
              <p className="text-sm font-medium text-muted-foreground">No user with the name &quot;{name}&quot; exists.</p>
            </div>
          </div>
        ) : profile ? (
          <>
            <div className="relative rounded-3xl bg-card/30 backdrop-blur-xl border border-border/10 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />

              <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                <div className="relative group shrink-0">
                  <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative w-32 h-32 bg-background/50 rounded-2xl border border-border/10 flex items-center justify-center overflow-hidden shadow-inner">
                    <Image
                      src={getAvatarUrl(profile.profilePicture, profile.username, profile.xboxId)}
                      alt={profile.username}
                      width={100}
                      height={100}
                      className="object-contain scale-110"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left space-y-3">
                  <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-none">
                    {profile.displayName || profile.username}
                  </h1>
                  {profile.displayName && (
                    <p className="text-sm font-bold text-muted-foreground">@{profile.username}</p>
                  )}
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {(() => {
                      const userRoles = profile.userRoles || []
                      const topRole = userRoles
                        .map((ur: any) => ur.role)
                        .sort((a: any, b: any) => (a.position ?? 999) - (b.position ?? 999))[0]
                      const badge = ROLE_BADGE_STYLES[topRole?.color || ''] || ROLE_BADGE_STYLES['text-primary']
                      return (
                        <div className={`px-4 py-2 rounded-xl border text-[0.55rem] font-black uppercase tracking-widest flex items-center gap-2 ${badge}`}>
                          <Shield size={12} /> {topRole?.name || profile.role}
                        </div>
                      )
                    })()}
                    <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 text-[0.55rem] font-black uppercase tracking-widest flex items-center gap-2">
                      <Calendar size={12} /> Joined {new Date(profile.createdAt).toLocaleDateString([], { month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {profile.bio && (
              <div className="rounded-3xl bg-card/30 backdrop-blur-xl border border-border/10 shadow-2xl p-8 md:p-10">
                <h3 className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">Bio</h3>
                <p className="text-base font-medium text-foreground leading-relaxed whitespace-pre-wrap">
                  {profile.bio}
                </p>
              </div>
            )}

            <div className="rounded-3xl bg-card/20 backdrop-blur-xl border border-border/10 shadow-2xl p-8 md:p-10 space-y-4">
              <h3 className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-muted-foreground">Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-black/20 border border-white/5">
                  <p className="text-[0.55rem] font-black uppercase tracking-widest text-muted-foreground">Xbox ID</p>
                  <p className="text-sm font-bold text-foreground mt-1 truncate">{profile.xboxId}</p>
                </div>
                <div className="p-4 rounded-2xl bg-black/20 border border-white/5">
                  <p className="text-[0.55rem] font-black uppercase tracking-widest text-muted-foreground">Role</p>
                  <p className="text-sm font-bold text-foreground mt-1">
                    {(() => {
                      const topRole = (profile.userRoles || [])
                        .map((ur: any) => ur.role)
                        .sort((a: any, b: any) => (a.position ?? 999) - (b.position ?? 999))[0]
                      return topRole?.name || profile.role
                    })()}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}
