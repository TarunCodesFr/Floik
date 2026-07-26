"use client"

import React, { useState, useEffect } from 'react'
import { Reorder } from 'framer-motion'
import {
  Plus, Save, Trash2, Loader2, Shield, Pencil, X, Check, Users,
  FileText, ClipboardList, Settings, SlidersHorizontal, GripVertical, MessageSquare
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from '@/context/auth-context'
import { toast } from "sonner";
import { apiFetch } from '@/lib/api'

interface Form {
  id: string
  title: string
  icon: string | null
  color: string | null
}

interface PermissionDef {
  id: string
  label: string
  description?: string
  hasFormScope?: boolean
}

interface PermissionGroup {
  id: string
  label: string
  icon: React.ElementType
  accent: string
  permissions: PermissionDef[]
}

const PERMISSION_GROUPS: PermissionGroup[] = [
  {
    id: 'forum',
    label: 'Forum',
    icon: MessageSquare,
    accent: 'amber',
    permissions: [
      { id: 'forum:moderate', label: 'Moderate Forum', description: 'Pin, lock, and manage forum posts' },
      { id: 'forum:delete', label: 'Delete Posts', description: 'Remove any forum post' },
      { id: 'forum:delete-comment', label: 'Delete Comments', description: 'Remove any forum comment' },
    ],
  },
  {
    id: 'forms',
    label: 'Forms',
    icon: FileText,
    accent: 'blue',
    permissions: [
      { id: 'forms:create', label: 'Create Forms', description: 'Create new application forms' },
      { id: 'forms:edit', label: 'Edit Forms', description: 'Modify existing forms' },
      { id: 'forms:delete', label: 'Delete Forms', description: 'Remove forms from the system' },
      { id: 'forms:view', label: 'View Forms', description: 'View form configurations' },
    ],
  },
  {
    id: 'submissions',
    label: 'Submissions',
    icon: ClipboardList,
    accent: 'emerald',
    permissions: [
      { id: 'submissions:view', label: 'View Submissions', description: 'Browse all submissions' },
      { id: 'submissions:review:*', label: 'Review Submissions', description: 'Approve or reject submissions', hasFormScope: true },
    ],
  },
  {
    id: 'administration',
    label: 'Administration',
    icon: Shield,
    accent: 'violet',
    permissions: [
      { id: 'users:manage', label: 'Manage Users', description: 'Edit user profiles and settings' },
      { id: 'users:roles', label: 'Assign Roles', description: 'Assign roles to users' },
      { id: 'roles:manage', label: 'Manage Roles', description: 'Create and edit permission roles' },
    ],
  },
  {
    id: 'system',
    label: 'System',
    icon: Settings,
    accent: 'zinc',
    permissions: [
      { id: 'settings:manage', label: 'Manage Settings', description: 'Modify portal configuration and branding' },
      { id: 'announcements:manage', label: 'Manage Announcements', description: 'Post and manage announcements' },
      { id: 'notifications:send', label: 'Send Notifications', description: 'Send push notifications to users' },
    ],
  },
]

const ACCENT_STYLES: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  blue: { border: 'border-blue-500/20', bg: 'bg-blue-500/[0.03]', text: 'text-blue-400', dot: 'bg-blue-500' },
  emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/[0.03]', text: 'text-emerald-400', dot: 'bg-emerald-500' },
  violet: { border: 'border-violet-500/20', bg: 'bg-violet-500/[0.03]', text: 'text-violet-400', dot: 'bg-violet-500' },
  amber: { border: 'border-amber-500/20', bg: 'bg-amber-500/[0.03]', text: 'text-amber-400', dot: 'bg-amber-500' },
  zinc: { border: 'border-zinc-500/20', bg: 'bg-zinc-500/[0.03]', text: 'text-zinc-400', dot: 'bg-zinc-500' },
}

interface Role {
  id: string
  name: string
  description: string | null
  color: string | null
  permissions: string[]
  position: number
  isDefault: boolean
  _count?: { users: number }
}

const COLOR_OPTIONS = [
  { value: 'text-primary', label: 'Gold' },
  { value: 'text-blue-500', label: 'Blue' },
  { value: 'text-emerald-500', label: 'Green' },
  { value: 'text-rose-500', label: 'Red' },
  { value: 'text-amber-500', label: 'Amber' },
  { value: 'text-violet-500', label: 'Purple' },
  { value: 'text-cyan-500', label: 'Cyan' },
  { value: 'text-pink-500', label: 'Pink' },
]

export default function RolesAdminPage() {
  const { token } = useAuth()
  const [roles, setRoles] = useState<Role[]>([])
  const [forms, setForms] = useState<Form[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [reordering, setReordering] = useState(false)
  const [editingRole, setEditingRole] = useState<Partial<Role> | null>(null)


  const fetchRoles = async () => {
    setLoading(true)
    try {
      const data = await apiFetch('/api/portal/roles')
      setRoles(data)
    } catch (e) { console.error(e) }
    setLoading(false)
  }

  const fetchForms = async () => {
    try {
      const data = await apiFetch('/api/forms')
      setForms(data)
    } catch (e) { console.error(e) }
  }

  useEffect(() => {
    if (token) {
      fetchRoles()
      fetchForms()
    }
  }, [token])

  const reorderTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleReorder = (reordered: Role[]) => {
    setRoles(reordered)
    
    if (reorderTimeoutRef.current) {
      clearTimeout(reorderTimeoutRef.current)
    }

    reorderTimeoutRef.current = setTimeout(async () => {
      setReordering(true)
      try {
        const orderedIds = reordered.map(r => r.id)
        await apiFetch('/api/portal/roles/reorder', {
          method: 'PUT',
          body: JSON.stringify({ orderedIds }),
        })
      } catch (e) {
        console.error('Reorder Error:', e)
        toast.error('Failed to save role order.')
        fetchRoles()
      } finally {
        setReordering(false)
        reorderTimeoutRef.current = null
      }
    }, 1000)
  }

  const hasReviewPermission = (editingRole?.permissions || []).some(p => p.startsWith('submissions:review:'))
  const isReviewAllForms = (editingRole?.permissions || []).includes('submissions:review:*')
  const selectedReviewFormIds = (editingRole?.permissions || [])
    .filter(p => p.startsWith('submissions:review:') && p !== 'submissions:review:*')
    .map(p => p.replace('submissions:review:', ''))

  const togglePermission = (permId: string) => {
    if (!editingRole) return
    const perms = editingRole.permissions || []

    if (permId === 'submissions:review:*') {
      if (hasReviewPermission) {
        setEditingRole({
          ...editingRole,
          permissions: perms.filter(p => !p.startsWith('submissions:review:')),
        })
      } else {
        setEditingRole({
          ...editingRole,
          permissions: [...perms, 'submissions:review:*'],
        })
      }
      return
    }

    setEditingRole({
      ...editingRole,
      permissions: perms.includes(permId)
        ? perms.filter(p => p !== permId)
        : [...perms, permId],
    })
  }

  const setReviewAllForms = () => {
    if (!editingRole) return
    const filtered = editingRole.permissions?.filter(p => !p.startsWith('submissions:review:')) || []
    setEditingRole({
      ...editingRole,
      permissions: [...filtered, 'submissions:review:*'],
    })
  }

  const toggleReviewForm = (formId: string) => {
    if (!editingRole) return
    const filtered = editingRole.permissions?.filter(p => !p.startsWith('submissions:review:')) || []
    const isSelected = selectedReviewFormIds.includes(formId)

    const newReviewPerms = isSelected
      ? selectedReviewFormIds.filter(f => f !== formId)
      : [...selectedReviewFormIds, formId]

    if (newReviewPerms.length === 0) {
      setEditingRole({
        ...editingRole,
        permissions: filtered,
      })
    } else {
      setEditingRole({
        ...editingRole,
        permissions: [...filtered, ...newReviewPerms.map(f => `submissions:review:${f}`)],
      })
    }
  }

  const normalizePermissions = (perms: string[]): string[] => {
    if (perms.includes('submissions:review:*')) {
      return perms.filter(p => !p.startsWith('submissions:review:') || p === 'submissions:review:*')
    }
    return perms
  }

  const countSelectedInGroup = (group: PermissionGroup): number => {
    if (!editingRole?.permissions) return 0
    return group.permissions.filter(p => {
      if (p.hasFormScope) {
        return editingRole.permissions!.some(ep => ep.startsWith('submissions:review:'))
      }
      return editingRole.permissions!.includes(p.id)
    }).length
  }

  const saveRole = async () => {
    if (!editingRole || !editingRole.name?.trim()) {
      toast.error('Role name is required.')
      return
    }

    setSaving(true)
    try {
      const method = editingRole.id ? 'PUT' : 'POST'
      const url = editingRole.id ? `/api/portal/roles/${editingRole.id}` : '/api/portal/roles'
      await apiFetch(url, {
        method,
        body: JSON.stringify({
          name: editingRole.name,
          description: editingRole.description || '',
          color: editingRole.color || 'text-primary',
          permissions: normalizePermissions(editingRole.permissions || []),
          isDefault: editingRole.isDefault ?? false,
        }),
      })

      toast.success(`Role "${editingRole.name}" saved.`)
      setEditingRole(null)
      await fetchRoles()
    } catch (e: any) {
      console.error('Save Role Error:', e)
      toast.error(e.message || 'Failed to save role')
    }
    setSaving(false)
  }

  const deleteRole = async (id: string) => {
    try {
      await apiFetch(`/api/portal/roles/${id}`, { method: 'DELETE' })
      toast.success('Role deleted.')
      await fetchRoles()
    } catch (e) {
      toast.error('Failed to delete role.')
    }
  }


  const renderPermissions = () => {
    if (!editingRole) return null
    const perms = editingRole.permissions || []

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="size-3.5 text-zinc-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Permissions</span>
          <span className="text-[10px] font-bold text-zinc-600 ml-auto">
            {perms.length} selected
          </span>
        </div>

        {PERMISSION_GROUPS.map(group => {
          const accent = ACCENT_STYLES[group.accent]
          const selectedCount = countSelectedInGroup(group)
          const Icon = group.icon

          return (
            <div
              key={group.id}
              className={`rounded-2xl border ${accent.border} ${accent.bg} overflow-hidden transition-all`}
            >
              <div className="px-5 py-3 flex items-center gap-3 border-b border-white/5">
                <Icon className={`size-4 ${accent.text}`} />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  {group.label}
                </span>
                <span className="text-[10px] font-bold text-zinc-600 ml-auto">
                  {selectedCount}/{group.permissions.length}
                </span>
              </div>

              <div className="p-5 space-y-1">
                {group.permissions.map(perm => {
                  const isActive = perm.hasFormScope
                    ? hasReviewPermission
                    : perms.includes(perm.id)

                  return (
                    <div key={perm.id}>
                      <button
                        onClick={() => togglePermission(perm.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                          isActive
                            ? `${accent.bg.replace('0.03', '0.08')} ${accent.border.replace('/20', '/30')} ${accent.text}`
                            : 'bg-transparent border-transparent text-zinc-500 hover:bg-white/[0.02] hover:border-white/5'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0 ${
                          isActive
                            ? `${accent.dot} border-transparent`
                            : 'border-zinc-700'
                        }`}>
                          {isActive && <Check className="size-3 text-white" />}
                        </div>
                        <div className="text-left">
                          <span>{perm.label}</span>
                          {perm.description && (
                            <span className="block text-[10px] font-medium text-zinc-600 mt-0.5">
                              {perm.description}
                            </span>
                          )}
                        </div>
                      </button>

                      {perm.hasFormScope && isActive && (
                        <div className="ml-11 mt-2 mb-1 p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                          <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">
                              Review Scope
                            </span>
                          </div>

                          <label className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all text-xs font-bold ${
                            isReviewAllForms
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : 'text-zinc-400 hover:bg-white/5'
                          }`}>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              isReviewAllForms ? 'border-emerald-500' : 'border-zinc-700'
                            }`}>
                              {isReviewAllForms && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                            </div>
                            <div>
                              <span>All Forms</span>
                              <span className="block text-[9px] font-medium text-zinc-600">Full access to review every form</span>
                            </div>
                            <input
                              type="radio"
                              name="review-scope"
                              checked={isReviewAllForms}
                              onChange={setReviewAllForms}
                              className="hidden"
                            />
                          </label>

                          <div className="space-y-1">
                            <label className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all text-xs font-bold ${
                              !isReviewAllForms
                                ? 'bg-emerald-500/10 text-emerald-400'
                                : 'text-zinc-400 hover:bg-white/5'
                            }`}>
                              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                !isReviewAllForms ? 'border-emerald-500' : 'border-zinc-700'
                              }`}>
                                {!isReviewAllForms && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                              </div>
                              <span>Specific Forms</span>
                              <input
                                type="radio"
                                name="review-scope"
                                checked={!isReviewAllForms}
                                onChange={() => {
                                  if (selectedReviewFormIds.length === 0) {
                                    const firstForm = forms[0]
                                    if (firstForm) toggleReviewForm(firstForm.id)
                                  }
                                }}
                                className="hidden"
                              />
                            </label>

                            {!isReviewAllForms && (
                              <div className="ml-7 mt-2 space-y-1">
                                {forms.length === 0 ? (
                                  <p className="text-[10px] text-zinc-600 px-3 py-2">No forms available.</p>
                                ) : (
                                  <div className="grid grid-cols-1 gap-1 max-h-48 overflow-y-auto">
                                    {forms.map(form => {
                                      const isFormSelected = selectedReviewFormIds.includes(form.id)
                                      return (
                                        <button
                                          key={form.id}
                                          onClick={() => toggleReviewForm(form.id)}
                                          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[10px] font-bold transition-all ${
                                            isFormSelected
                                              ? 'bg-emerald-500/10 text-emerald-400'
                                              : 'text-zinc-500 hover:bg-white/5 hover:text-zinc-300'
                                          }`}
                                        >
                                          <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-all ${
                                            isFormSelected
                                              ? 'bg-emerald-500 border-emerald-500'
                                              : 'border-zinc-700'
                                          }`}>
                                            {isFormSelected && <Check className="size-2.5 text-white" />}
                                          </div>
                                          {form.title}
                                        </button>
                                      )
                                    })}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-white tracking-tight">Role Manager</h1>
          <p className="text-sm text-zinc-500 font-medium">
            Drag roles to reorder priority. The highest role is shown on profiles and the navbar.
          </p>
        </div>
        <Button
          onClick={() => setEditingRole({ name: '', description: '', color: 'text-primary', permissions: [], isDefault: false })}
          className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest gap-2"
        >
          <Plus className="size-4" /> New Role
        </Button>
      </div>

      {editingRole && (
        <div
          className="p-6 rounded-2xl bg-zinc-950 border border-white/5 space-y-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
              {editingRole.id ? 'Edit' : 'Create'} Role
            </h3>
            <button onClick={() => setEditingRole(null)} className="p-1.5 rounded-md hover:bg-white/5 text-zinc-500">
              <X className="size-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Name</label>
                <Input
                  value={editingRole.name || ''}
                  onChange={e => setEditingRole({ ...editingRole, name: e.target.value })}
                  placeholder="e.g. Moderator"
                  className="bg-black/40 border-white/10 rounded-xl h-11"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Description</label>
                <Textarea
                  value={editingRole.description || ''}
                  onChange={e => setEditingRole({ ...editingRole, description: e.target.value })}
                  placeholder="What does this role do?"
                  className="bg-black/40 border-white/10 rounded-xl min-h-[80px]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Color</label>
                <div className="flex flex-wrap gap-2">
                  {COLOR_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setEditingRole({ ...editingRole, color: opt.value })}
                      className={`px-3 py-2 rounded-lg text-[10px] font-bold transition-all ${editingRole.color === opt.value ? 'bg-white/10 border border-white/20 text-white' : 'bg-white/5 text-zinc-500 border border-white/5 hover:border-white/20'}`}
                    >
                      <span className={opt.value}>●</span> {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {renderPermissions()}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={editingRole.isDefault || false}
                onChange={e => setEditingRole({ ...editingRole, isDefault: e.target.checked })}
                className="rounded border-white/10"
              />
              <span className="text-xs font-bold text-zinc-400">Default role for new users</span>
            </label>
            <Button onClick={saveRole} disabled={saving} className="h-10 px-6 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest gap-2">
              {saving ? <Loader2 className="animate-spin size-4" /> : <Save className="size-4" />}
              Save Role
            </Button>
          </div>
        </div>
      )}

      {loading ? (
        <div className="max-w-3xl space-y-3">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-14 rounded-2xl bg-zinc-950 border border-white/5 animate-pulse" />
          ))}
        </div>
      ) : roles.length === 0 ? (
        <div className="p-24 rounded-3xl border border-dashed border-white/10 text-center space-y-4">
          <Shield className="size-12 text-zinc-800 mx-auto" />
          <p className="text-sm font-bold text-zinc-600">No roles created yet.</p>
          <p className="text-xs text-zinc-700">Click "New Role" to create your first permission-based role.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {reordering && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold">
              <Loader2 className="size-3 animate-spin" />
              Saving order...
            </div>
          )}

          <div className="flex items-center gap-3 px-1">
            <GripVertical className="size-3.5 text-zinc-700" />
            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">
              Drag to reorder — highest priority at top
            </span>
          </div>

          <Reorder.Group axis="y" values={roles} onReorder={handleReorder} className="max-w-3xl space-y-3">
            {roles.map(role => (
              <Reorder.Item 
                key={role.id} 
                value={role} 
                className="relative flex items-center gap-4 p-3 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors group cursor-default"
              >
                <div className="cursor-grab active:cursor-grabbing p-1.5 rounded-lg hover:bg-white/5 text-zinc-600 hover:text-zinc-400 transition-colors">
                  <GripVertical className="size-4" />
                </div>
                
                <div className="flex-1 min-w-0 flex items-center gap-4">
                  <div className={`size-3 rounded-full shrink-0 ${role.color || 'bg-primary'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-sm font-bold text-white truncate">{role.name}</h3>
                      {role.isDefault && (
                        <span className="text-[8px] font-black uppercase tracking-widest text-primary/60 px-1.5 py-0.5 rounded bg-primary/5 border border-primary/10">Default</span>
                      )}
                    </div>
                    {role.description && (
                      <p className="text-[10px] text-zinc-500 font-medium truncate mt-0.5">{role.description}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-6 text-zinc-600 text-[10px] font-bold uppercase tracking-widest shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Users className="size-3" />
                    <span>{role._count?.users || 0}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="size-3" />
                    <span>{role.permissions.length}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 pl-4 ml-4 border-l border-white/5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    onClick={() => setEditingRole(role)}
                    variant="link"
                    className="h-8 px-2 text-zinc-400 hover:text-white text-[10px] font-bold"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteRole(role.id)}
                    variant="link"
                    className="h-8 px-2 text-rose-500/80 hover:text-rose-400 text-[10px] font-bold"
                  >
                    Delete
                  </Button>
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      )}
    </div>
  )
}
