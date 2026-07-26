"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Shield, Users, Loader2, Check, Save, Plus } from 'lucide-react'

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

function getHighestRole(user: any): { name: string; style: string } | null {
  const roles = user?.userRoles
    ?.map((ur: any) => ur.role)
    ?.sort((a: any, b: any) => (a.position ?? 999) - (b.position ?? 999)) || []
  if (roles.length === 0) return null
  return {
    name: roles[0].name,
    style: ROLE_BADGE_STYLES[roles[0].color] || ROLE_BADGE_STYLES['text-primary'],
  }
}
import Image from 'next/image'
import { getAvatarUrl } from '@/lib/avatar'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from '@/context/auth-context'
import { toast } from "sonner";
import { AutoSkeleton } from "auto-skeleton-react-and-native"

interface Role {
  id: string
  name: string
  color: string
}

interface User {
  id: string
  username: string
  xboxId: string
  role: string
  createdAt: string
  profile: { displayName: string | null; profilePicture: string | null } | null
  userRoles: { role: Role }[]
}

import { apiFetch } from '@/lib/api'

export default function UsersAdminPage() {
  const { token } = useAuth()
  const [users, setUsers] = useState<User[]>([])
  const [roles, setRoles] = useState<Role[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')
  const [savingUserId, setSavingUserId] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const [usersData, rolesData] = await Promise.all([
        apiFetch('/api/portal/users'),
        apiFetch('/api/portal/roles'),
      ])
      setUsers(usersData)
      setRoles(rolesData)
    } catch (e) { console.error(e) }
    setLoading(false)
  }

  useEffect(() => { 
    if (token) fetchData() 
  }, [token])

  const toggleUserRole = async (userId: string, roleId: string, currentlyAssigned: boolean) => {
    const user = users.find(u => u.id === userId)
    if (!user) return

    setSavingUserId(userId)

    const currentRoleIds = user.userRoles.map(ur => ur.role.id)
    const newRoleIds = currentlyAssigned
      ? currentRoleIds.filter(id => id !== roleId)
      : [...currentRoleIds, roleId]

    try {
      const updatedUser = await apiFetch(`/api/portal/users/${userId}/roles`, {
        method: 'PUT',
        body: JSON.stringify({ roleIds: newRoleIds }),
      })

      setUsers(prev => prev.map(u => u.id === userId ? updatedUser : u))
      toast.success('User roles have been updated.')
    } catch (e) {
      toast.error('Failed to update roles.')
    }
    setSavingUserId(null)
  }

  const filteredUsers = users.filter(u =>
    u.username.toLowerCase().includes(filter.toLowerCase()) ||
    u.profile?.displayName?.toLowerCase().includes(filter.toLowerCase()) ||
    u.xboxId.includes(filter)
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-white tracking-tight">User Management</h1>
          <p className="text-sm text-zinc-500 font-medium">View all users and assign roles.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <Input
            placeholder="Search users..."
            className="w-full h-11 pl-10 bg-zinc-950 border-white/10 rounded-xl text-sm"
            onChange={e => setFilter(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <AutoSkeleton isLoading={true}>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-28 rounded-2xl bg-zinc-950" />)}
          </div>
        </AutoSkeleton>
      ) : (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          {filteredUsers.map((user) => {
            const assignedRoleIds = user.userRoles.map(ur => ur.role.id)
            return (
              <div
                key={user.id}
                className="p-5 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <Image
                      src={getAvatarUrl(user.profile?.profilePicture, user.username, user.xboxId)}
                      alt={user.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-white truncate">
                        {user.profile?.displayName || user.username}
                      </span>
                      {(() => {
                        const hr = getHighestRole(user)
                        return hr ? (
                          <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${hr.style}`}>
                            {hr.name}
                          </span>
                        ) : (
                          <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider ${
                            user.role === 'ADMIN'
                              ? 'bg-primary/10 text-primary border border-primary/20'
                              : 'bg-zinc-800 text-zinc-500 border border-white/5'
                          }`}>
                            {user.role}
                          </span>
                        )
                      })()}
                    </div>
                    <p className="text-xs text-zinc-500 font-medium truncate">@{user.username} · {user.xboxId?.slice(0, 8)}...</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {roles.map(role => {
                    const isAssigned = assignedRoleIds.includes(role.id)
                    const isSaving = savingUserId === user.id
                    return (
                      <button
                        key={role.id}
                        onClick={() => toggleUserRole(user.id, role.id, isAssigned)}
                        disabled={isSaving}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border ${
                          isAssigned
                            ? 'bg-primary/10 border-primary/30 text-primary'
                            : 'bg-white/5 border-white/5 text-zinc-500 hover:border-white/10'
                        }`}
                      >
                        {isSaving ? (
                          <Loader2 className="size-3 animate-spin" />
                        ) : isAssigned ? (
                          <Check className="size-3" />
                        ) : (
                          <Plus className="size-3" />
                        )}
                        {role.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
          {filteredUsers.length === 0 && (
            <div className="p-16 rounded-3xl border border-dashed border-white/10 text-center space-y-3">
              <Users className="size-10 text-zinc-800 mx-auto" />
              <p className="text-sm font-bold text-zinc-600">No users found</p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}
