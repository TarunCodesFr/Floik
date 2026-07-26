"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Save, Loader2, User, Shield, AtSign, FileText, Activity, Camera, Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useAuth } from "@/context/auth-context"
import { toast } from "sonner";
import { AutoSkeleton } from "auto-skeleton-react-and-native"
import { apiFetch } from "@/lib/api"

export default function ProfilePage() {
  const { user, token, loading, refreshUser } = useAuth()
  const [displayName, setDisplayName] = useState("")
  const [bio, setBio] = useState("")
  const [saving, setSaving] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [profilePicture, setProfilePicture] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)


  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "")
      setBio(user.bio || "")
      setProfilePicture(user.profilePicture || null)
      setLoaded(true)
    }
  }, [user])

  const handlePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    if (!validTypes.includes(file.type)) {
      toast.error("Invalid file type. Only JPG, PNG, WEBP, and GIF are allowed.")
      return
    }
    
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File is too large. Maximum size is 5MB.")
      return
    }

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const data = await apiFetch('/api/upload/profile-picture', {
        method: 'POST',
        body: formData,
      })

      setProfilePicture(data.url)
      await refreshUser()

      toast.success("Profile picture updated.");
    } catch {
      toast.error("Failed to upload image.");
    }
    setUploading(false)
  }

  const handlePictureDelete = async () => {
    setUploading(true)
    try {
      await apiFetch('/api/upload/profile-picture', {
        method: 'DELETE'
      })

      setProfilePicture(null)
      await refreshUser()

      toast.success("Profile picture removed.");
    } catch {
      toast.error("Failed to remove picture.");
    }
    setUploading(false)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await apiFetch('/api/auth/me', {
        method: 'PATCH',
        body: JSON.stringify({ displayName, bio })
      })

      await refreshUser()
      toast.success("Your profile has been saved successfully.");
    } catch (e) {
      toast.error("Failed to save profile. Please try again.");
    }
    setSaving(false)
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-12">
        <Link href="/portal" className="inline-flex items-center gap-2 text-[0.6rem] font-black tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors group">
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Portal
        </Link>

        {loading || !loaded ? (
          <AutoSkeleton isLoading={true}>
            <div className="space-y-8">
              <div className="h-64 rounded-3xl bg-card/30" />
              <div className="h-48 rounded-3xl bg-card/30" />
              <div className="h-12 w-32 bg-secondary/10 rounded" />
            </div>
          </AutoSkeleton>
        ) : !user ? null : (
          <>
            <div className="relative rounded-3xl bg-card/30 backdrop-blur-xl border border-border/10 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />

              <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                <div className="relative group shrink-0">
                  <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative w-32 h-32 bg-background/50 rounded-2xl border border-border/10 flex items-center justify-center overflow-hidden shadow-inner">
                    <Image
                      src={profilePicture || `https://mc-heads.net/avatar/${user.username}/100`}
                      alt={user.username}
                      width={100}
                      height={100}
                      className="object-contain scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="w-9 h-9 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                      >
                        <Camera className="w-4 h-4 text-white" />
                      </button>
                      {profilePicture && (
                        <button
                          onClick={handlePictureDelete}
                          disabled={uploading}
                          className="w-9 h-9 rounded-lg bg-rose-500/40 hover:bg-rose-500/60 flex items-center justify-center transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-white" />
                        </button>
                      )}
                    </div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    onChange={handlePictureUpload}
                    className="hidden"
                  />
                </div>

                <div className="flex-1 text-center md:text-left space-y-3">
                  <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-none">
                    {user.displayName || user.username}
                  </h1>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <div className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-[0.55rem] font-black uppercase tracking-widest flex items-center gap-2">
                      <Shield size={12} /> {user.role}
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 text-[0.55rem] font-black uppercase tracking-widest flex items-center gap-2">
                      <AtSign size={12} /> {user.xboxId ? `${user.xboxId.slice(0, 8)}...` : 'N/A'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="rounded-3xl bg-card/40 backdrop-blur-xl border-border/10 shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <User size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-foreground tracking-tight">Profile Settings</h2>
                    <p className="text-xs text-muted-foreground font-medium">Update your display name and bio.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                      Xbox Gamertag <span className="text-zinc-600">(read-only)</span>
                    </label>
                    <Input
                      value={user.username}
                      disabled
                      className="bg-black/20 border-border/5 rounded-2xl py-7 px-5 text-[0.85rem] font-bold text-zinc-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                      Display Name
                    </label>
                    <Input
                      value={displayName}
                      onChange={e => setDisplayName(e.target.value)}
                      placeholder="Your display name"
                      className="bg-background/40 border-border/10 rounded-2xl focus:border-primary/50 py-7 px-5 transition-all text-[0.85rem] font-bold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">
                      Bio
                    </label>
                    <Textarea
                      value={bio}
                      onChange={e => setBio(e.target.value)}
                      placeholder="Tell us a little about yourself..."
                      className="bg-background/40 border-border/10 rounded-2xl focus:border-primary/50 min-h-[140px] transition-all text-[0.85rem] font-bold p-5"
                      maxLength={500}
                    />
                    <p className="text-[0.55rem] font-bold text-muted-foreground text-right">{bio.length}/500</p>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button
                    onClick={handleSave}
                    disabled={saving}
                    className="w-full py-8 text-base font-black rounded-2xl bg-primary hover:brightness-110 shadow-2xl shadow-primary/20 transition-all flex gap-3 tracking-widest"
                  >
                    {saving ? (
                      <Loader2 className="animate-spin w-5 h-5" />
                    ) : (
                      <Save className="w-5 h-5" />
                    )}
                    Save Changes
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
