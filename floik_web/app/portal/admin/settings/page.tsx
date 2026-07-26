"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Save, Loader2, Settings as SettingsIcon, Globe, Gamepad2, Key, Mail, MessageSquare, ShieldCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useAuth } from '@/context/auth-context'
import { toast } from "sonner";
import { apiFetch } from '@/lib/api'

export default function SettingsPage() {
  const { token } = useAuth()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [settings, setSettings] = useState<any>(null)


  useEffect(() => {
    apiFetch('/api/settings')
      .then(data => {
        if (data) setSettings(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const update = (key: string, value: any) => {
    setSettings((prev: any) => prev ? { ...prev, [key]: value } : prev)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await apiFetch('/api/settings', {
        method: 'PATCH',
        body: JSON.stringify(settings),
      })
      toast.success('Portal settings updated.')
    } catch (e) {
      toast.error('Failed to save settings.')
    }
    setSaving(false)
  }

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map(i => <div key={i} className="h-32 rounded-2xl bg-zinc-950 border border-white/5 animate-pulse" />)}
      </div>
    )
  }

  const isMinecraft = settings?.portalType === 'MINECRAFT'

  return (
    <div className="space-y-8 max-w-3xl">
      <div className="space-y-1">
        <h1 className="text-3xl font-black text-white tracking-tight">Portal Settings</h1>
        <p className="text-sm text-zinc-500 font-medium">Configure your portal type and authentication methods.</p>
      </div>

      <div className="rounded-2xl bg-zinc-950 border border-white/5 overflow-hidden">
        <div className="px-6 py-4 flex items-center gap-3 border-b border-white/5">
          <Globe className="size-4 text-violet-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Portal Type</span>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => update('portalType', 'MINECRAFT')}
              className={`p-5 rounded-xl border-2 text-left transition-all ${
                isMinecraft
                  ? 'border-emerald-500/50 bg-emerald-500/10'
                  : 'border-white/5 bg-transparent hover:border-white/10'
              }`}
            >
              <Gamepad2 className={`size-6 mb-3 ${isMinecraft ? 'text-emerald-400' : 'text-zinc-500'}`} />
              <p className={`text-sm font-bold ${isMinecraft ? 'text-white' : 'text-zinc-400'}`}>Minecraft</p>
              <p className="text-[10px] font-medium text-zinc-600 mt-1">Xbox Live login, Minecraft avatars</p>
            </button>
            <button
              onClick={() => update('portalType', 'GENERIC')}
              className={`p-5 rounded-xl border-2 text-left transition-all ${
                !isMinecraft
                  ? 'border-emerald-500/50 bg-emerald-500/10'
                  : 'border-white/5 bg-transparent hover:border-white/10'
              }`}
            >
              <Globe className={`size-6 mb-3 ${!isMinecraft ? 'text-emerald-400' : 'text-zinc-500'}`} />
              <p className={`text-sm font-bold ${!isMinecraft ? 'text-white' : 'text-zinc-400'}`}>Generic / SaaS</p>
              <p className="text-[10px] font-medium text-zinc-600 mt-1">Email, Google, custom avatars</p>
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-zinc-950 border border-white/5 overflow-hidden">
        <div className="px-6 py-4 flex items-center gap-3 border-b border-white/5">
          <Key className="size-4 text-amber-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Authentication Methods</span>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-3">
            <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
              isMinecraft ? 'bg-black/40 border-white/5' : 'bg-black/20 border-white/5 opacity-40 pointer-events-none'
            }`}>
              <div>
                <p className="text-xs font-bold text-white">Microsoft / Xbox Live</p>
                <p className="text-[10px] text-zinc-500 font-medium mt-0.5">Sign in with Xbox account</p>
              </div>
              <div className={`w-10 h-6 rounded-full transition-colors relative ${settings?.allowMicrosoftAuth ? 'bg-emerald-500' : 'bg-zinc-700'}`}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${settings?.allowMicrosoftAuth ? 'translate-x-[18px]' : 'translate-x-0.5'}`} />
                <input
                  type="checkbox"
                  checked={settings?.allowMicrosoftAuth ?? true}
                  onChange={e => update('allowMicrosoftAuth', e.target.checked)}
                  disabled={!isMinecraft}
                  className="hidden"
                />
              </div>
            </label>

            <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
              !isMinecraft ? 'bg-black/40 border-white/5' : 'bg-black/20 border-white/5 opacity-40 pointer-events-none'
            }`}>
              <div>
                <p className="text-xs font-bold text-white">Email & Password</p>
                <p className="text-[10px] text-zinc-500 font-medium mt-0.5">Register and login with email</p>
              </div>
              <div className={`w-10 h-6 rounded-full transition-colors relative ${settings?.allowEmailAuth ? 'bg-emerald-500' : 'bg-zinc-700'}`}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${settings?.allowEmailAuth ? 'translate-x-[18px]' : 'translate-x-0.5'}`} />
                <input
                  type="checkbox"
                  checked={settings?.allowEmailAuth ?? false}
                  onChange={e => update('allowEmailAuth', e.target.checked)}
                  disabled={isMinecraft}
                  className="hidden"
                />
              </div>
            </label>

            <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
              !isMinecraft ? 'bg-black/40 border-white/5' : 'bg-black/20 border-white/5 opacity-40 pointer-events-none'
            }`}>
              <div>
                <p className="text-xs font-bold text-white">Google</p>
                <p className="text-[10px] text-zinc-500 font-medium mt-0.5">Sign in with Google account</p>
              </div>
              <div className={`w-10 h-6 rounded-full transition-colors relative ${settings?.allowGoogleAuth ? 'bg-emerald-500' : 'bg-zinc-700'}`}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${settings?.allowGoogleAuth ? 'translate-x-[18px]' : 'translate-x-0.5'}`} />
                <input
                  type="checkbox"
                  checked={settings?.allowGoogleAuth ?? false}
                  onChange={e => update('allowGoogleAuth', e.target.checked)}
                  disabled={isMinecraft}
                  className="hidden"
                />
              </div>
            </label>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <p className="text-[10px] font-bold text-amber-400">
              {isMinecraft
                ? 'Switch to Generic mode above to enable email and Google authentication.'
                : 'Switch to Minecraft mode above to enable Xbox authentication.'}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-zinc-950 border border-white/5 overflow-hidden">
        <div className="px-6 py-4 flex items-center gap-3 border-b border-white/5">
          <MessageSquare className="size-4 text-cyan-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Community Forum</span>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-3">
            <label className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5 cursor-pointer">
              <div>
                <p className="text-xs font-bold text-white">Enable Forum</p>
                <p className="text-[10px] text-zinc-500 font-medium mt-0.5">Allow users to access the community forum</p>
              </div>
              <div className={`w-10 h-6 rounded-full transition-colors relative ${settings?.forumEnabled !== false ? 'bg-emerald-500' : 'bg-zinc-700'}`}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${settings?.forumEnabled !== false ? 'translate-x-[18px]' : 'translate-x-0.5'}`} />
                <input
                  type="checkbox"
                  checked={settings?.forumEnabled !== false}
                  onChange={e => update('forumEnabled', e.target.checked)}
                  className="hidden"
                />
              </div>
            </label>

            <label className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5 cursor-pointer">
              <div>
                <p className="text-xs font-bold text-white">Posting Role</p>
                <p className="text-[10px] text-zinc-500 font-medium mt-0.5">Who can create new forum posts</p>
              </div>
              <select
                value={settings?.forumPostingRole || 'USER'}
                onChange={e => update('forumPostingRole', e.target.value)}
                className="bg-zinc-800 border border-white/10 rounded-lg text-xs font-bold text-white px-3 py-1.5 outline-none focus:border-primary/50"
              >
                <option value="USER">All Users</option>
                <option value="ADMIN">Admins Only</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-zinc-950 border border-white/5 overflow-hidden">
        <div className="px-6 py-4 flex items-center gap-3 border-b border-white/5">
          <Mail className="size-4 text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Branding</span>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Site Name</label>
            <Input
              value={settings?.siteName || ''}
              onChange={e => update('siteName', e.target.value)}
              className="bg-black/40 border-white/10 rounded-xl h-11 max-w-xs"
            />
          </div>
        </div>
      </div>

      <Button
        onClick={handleSave}
        disabled={saving}
        className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest gap-2"
      >
        {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}
        Save Settings
      </Button>
    </div>
  )
}
