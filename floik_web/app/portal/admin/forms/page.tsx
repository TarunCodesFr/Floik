"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Plus, Trash2, GripVertical, Save, Loader2,
  ToggleLeft, ToggleRight, Eye, EyeOff, Pencil,
  FileText, ChevronDown, ChevronUp, X, Type, AlignLeft, List
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from '@/context/auth-context'
import { toast } from "sonner";
import { apiFetch } from '@/lib/api'

interface FormField {
  id: string
  type: 'text' | 'number' | 'textarea' | 'select'
  label: string
  placeholder: string
  required: boolean
  options?: string[] // For select fields
}

interface FormData {
  id?: string
  title: string
  description: string
  icon: string
  color: string
  isActive: boolean
  fields: FormField[]
}

const ICON_OPTIONS = [
  { value: 'ShieldCheck', label: 'Shield' },
  { value: 'Users', label: 'Users' },
  { value: 'Code2', label: 'Code' },
  { value: 'Bug', label: 'Bug' },
  { value: 'UserX', label: 'Report' },
  { value: 'Handshake', label: 'Partner' },
  { value: 'Star', label: 'Star' },
  { value: 'Gem', label: 'Gem' },
  { value: 'FileText', label: 'Document' },
]

const COLOR_OPTIONS = [
  { value: 'text-primary', label: 'Gold' },
  { value: 'text-blue-500', label: 'Blue' },
  { value: 'text-emerald-500', label: 'Green' },
  { value: 'text-rose-500', label: 'Red' },
  { value: 'text-amber-500', label: 'Amber' },
  { value: 'text-violet-500', label: 'Purple' },
]

const EMPTY_FORM: FormData = {
  title: '',
  description: '',
  icon: 'FileText',
  color: 'text-primary',
  isActive: true,
  fields: []
}

function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

export default function FormsAdminPage() {
  const { token } = useAuth()
  const [forms, setForms] = useState<(FormData & { id: string })[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editingForm, setEditingForm] = useState<FormData | null>(null)
  const [expandedField, setExpandedField] = useState<string | null>(null)

  const fetchForms = useCallback(async () => {
    if (!token) return
    setLoading(true)
    try {
      const data = await apiFetch('/api/forms')
      setForms(data)
    } catch (e) {
      console.error('Failed to fetch forms', e)
    }
    setLoading(false)
  }, [token])

  useEffect(() => { 
    if (token) fetchForms() 
  }, [token, fetchForms])

  const saveForm = async () => {
    if (!editingForm) return
    if (!editingForm.title.trim()) {
      toast.error('Form title is required.')
      return
    }
    if (editingForm.fields.length === 0) {
      toast.error('Add at least one field.')
      return
    }

    setSaving(true)
    try {
      const method = editingForm.id ? 'PUT' : 'POST'
      const url = editingForm.id ? `/api/forms/${editingForm.id}` : '/api/forms'
      await apiFetch(url, {
        method,
        body: JSON.stringify({
          title: editingForm.title,
          description: editingForm.description,
          icon: editingForm.icon,
          color: editingForm.color,
          isActive: editingForm.isActive,
          fields: editingForm.fields
        })
      })

      toast.success(`Form "${editingForm.title}" saved successfully.`)
      setEditingForm(null)
      fetchForms()
    } catch (e) {
      toast.error('Failed to save form.')
    }
    setSaving(false)
  }

  const deleteForm = async (id: string) => {
    try {
      await apiFetch(`/api/forms/${id}`, {
        method: 'DELETE'
      })
      toast.success('Form deleted.')
      fetchForms()
    } catch (e) {
      toast.error('Failed to delete form.')
    }
  }

  const addField = () => {
    if (!editingForm) return
    const newField: FormField = {
      id: generateId(),
      type: 'text',
      label: '',
      placeholder: '',
      required: true
    }
    setEditingForm({ ...editingForm, fields: [...editingForm.fields, newField] })
    setExpandedField(newField.id)
  }

  const updateField = (fieldId: string, updates: Partial<FormField>) => {
    if (!editingForm) return
    setEditingForm({
      ...editingForm,
      fields: editingForm.fields.map(f => f.id === fieldId ? { ...f, ...updates } : f)
    })
  }

  const removeField = (fieldId: string) => {
    if (!editingForm) return
    setEditingForm({
      ...editingForm,
      fields: editingForm.fields.filter(f => f.id !== fieldId)
    })
  }

  const moveField = (index: number, direction: 'up' | 'down') => {
    if (!editingForm) return
    const fields = [...editingForm.fields]
    const newIndex = direction === 'up' ? index - 1 : index + 1
    if (newIndex < 0 || newIndex >= fields.length) return
      ;[fields[index], fields[newIndex]] = [fields[newIndex], fields[index]]
    setEditingForm({ ...editingForm, fields })
  }

  // --- EDITOR VIEW ---
  if (editingForm) {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <button onClick={() => setEditingForm(null)} className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors mb-2 block">
              ← Back to Forms
            </button>
            <h1 className="text-3xl font-black text-white tracking-tight">
              {editingForm.id ? 'Edit' : 'Create'} Form
            </h1>
          </div>
          <Button
            onClick={saveForm}
            disabled={saving}
            className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest"
          >
            {saving ? <Loader2 className="animate-spin size-4 mr-2" /> : <Save className="size-4 mr-2" />}
            Save Form
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form Settings */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5 space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Form Settings</h3>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Title</label>
                <Input
                  value={editingForm.title}
                  onChange={e => setEditingForm({ ...editingForm, title: e.target.value })}
                  placeholder="e.g. Staff Application"
                  className="bg-black/40 border-white/10 rounded-xl h-11"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Description</label>
                <Textarea
                  value={editingForm.description}
                  onChange={e => setEditingForm({ ...editingForm, description: e.target.value })}
                  placeholder="Brief description of this form..."
                  className="bg-black/40 border-white/10 rounded-xl min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Icon</label>
                <div className="flex flex-wrap gap-2">
                  {ICON_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setEditingForm({ ...editingForm, icon: opt.value })}
                      className={`px-3 py-2 rounded-lg text-[10px] font-bold transition-all ${editingForm.icon === opt.value ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/5 text-zinc-500 border border-white/5 hover:border-white/20'}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Color</label>
                <div className="flex flex-wrap gap-2">
                  {COLOR_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setEditingForm({ ...editingForm, color: opt.value })}
                      className={`px-3 py-2 rounded-lg text-[10px] font-bold transition-all ${editingForm.color === opt.value ? 'bg-white/10 border border-white/20 text-white' : 'bg-white/5 text-zinc-500 border border-white/5 hover:border-white/20'}`}
                    >
                      <span className={opt.value}>●</span> {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-white/5">
                <span className="text-xs font-bold text-zinc-400">Active in Portal</span>
                <button
                  onClick={() => setEditingForm({ ...editingForm, isActive: !editingForm.isActive })}
                  className="transition-colors"
                >
                  {editingForm.isActive
                    ? <ToggleRight className="size-8 text-emerald-500" />
                    : <ToggleLeft className="size-8 text-zinc-600" />
                  }
                </button>
              </div>
            </div>
          </div>

          {/* Right: Fields Builder */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                Questions ({editingForm.fields.length})
              </h3>
              <Button onClick={addField} variant="outline" className="h-9 px-4 rounded-lg border-white/10 text-xs font-bold gap-2">
                <Plus className="size-3" /> Add Question
              </Button>
            </div>

            {editingForm.fields.length === 0 && (
              <div className="p-16 rounded-2xl border border-dashed border-white/10 text-center space-y-4">
                <FileText className="size-10 text-zinc-700 mx-auto" />
                <p className="text-xs font-bold text-zinc-600">No questions yet. Click "Add Question" to get started.</p>
              </div>
            )}

            <AnimatePresence>
              {editingForm.fields.map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-5 rounded-2xl bg-zinc-950 border border-white/5 space-y-4"
                >
                  {/* Field Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <GripVertical className="size-4 text-zinc-700" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">#{index + 1}</span>
                      <span className="text-sm font-bold text-white truncate max-w-[200px]">
                        {field.label || 'Untitled Question'}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-white/5 text-zinc-500">
                        {field.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => moveField(index, 'up')} disabled={index === 0} className="p-1.5 rounded-md hover:bg-white/5 text-zinc-600 disabled:opacity-30">
                        <ChevronUp className="size-3.5" />
                      </button>
                      <button onClick={() => moveField(index, 'down')} disabled={index === editingForm.fields.length - 1} className="p-1.5 rounded-md hover:bg-white/5 text-zinc-600 disabled:opacity-30">
                        <ChevronDown className="size-3.5" />
                      </button>
                      <button onClick={() => setExpandedField(expandedField === field.id ? null : field.id)} className="p-1.5 rounded-md hover:bg-white/5 text-zinc-600">
                        <Pencil className="size-3.5" />
                      </button>
                      <button onClick={() => removeField(field.id)} className="p-1.5 rounded-md hover:bg-rose-500/10 text-rose-500">
                        <Trash2 className="size-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded: Field Editor */}
                  {expandedField === field.id && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Question Label</label>
                        <Input
                          value={field.label}
                          onChange={e => updateField(field.id, { label: e.target.value })}
                          placeholder="e.g. What is your timezone?"
                          className="bg-black/40 border-white/10 rounded-lg h-10 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Placeholder</label>
                        <Input
                          value={field.placeholder}
                          onChange={e => updateField(field.id, { placeholder: e.target.value })}
                          placeholder="Placeholder text..."
                          className="bg-black/40 border-white/10 rounded-lg h-10 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Field Type</label>
                        <div className="flex gap-2">
                          {([
                            { val: 'text', icon: Type, label: 'Text' },
                            { val: 'number', icon: Type, label: 'Number' },
                            { val: 'textarea', icon: AlignLeft, label: 'Long Text' },
                            { val: 'select', icon: List, label: 'Dropdown' },
                          ] as const).map(opt => (
                            <button
                              key={opt.val}
                              onClick={() => updateField(field.id, { type: opt.val })}
                              className={`flex-1 py-2 rounded-lg text-[9px] font-bold transition-all ${field.type === opt.val ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/5 text-zinc-500 border border-white/5'}`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2 flex items-end">
                        <button
                          onClick={() => updateField(field.id, { required: !field.required })}
                          className={`w-full py-2.5 rounded-lg text-[9px] font-bold transition-all border ${field.required ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-white/5 text-zinc-500 border-white/5'}`}
                        >
                          {field.required ? '✓ Required' : 'Optional'}
                        </button>
                      </div>

                      {/* Select options */}
                      {field.type === 'select' && (
                        <div className="md:col-span-2 space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest text-zinc-600">Options (comma separated)</label>
                          <Input
                            value={(field.options || []).join(', ')}
                            onChange={e => updateField(field.id, { options: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                            placeholder="Option A, Option B, Option C"
                            className="bg-black/40 border-white/10 rounded-lg h-10 text-sm"
                          />
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    )
  }

  // --- LIST VIEW ---
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-white tracking-tight">Applications</h1>
          <p className="text-sm text-zinc-500 font-medium">Create and manage dynamic application forms for your portal.</p>
        </div>
        <Button
          onClick={() => setEditingForm({ ...EMPTY_FORM })}
          className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-black text-xs uppercase tracking-widest gap-2"
        >
          <Plus className="size-4" /> New Form
        </Button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-48 rounded-2xl bg-zinc-950 border border-white/5 animate-pulse" />
          ))}
        </div>
      ) : forms.length === 0 ? (
        <div className="p-24 rounded-3xl border border-dashed border-white/10 text-center space-y-4">
          <FileText className="size-12 text-zinc-800 mx-auto" />
          <p className="text-sm font-bold text-zinc-600">No forms created yet.</p>
          <p className="text-xs text-zinc-700">Click "New Form" to create your first dynamic application.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forms.map(form => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-zinc-950 border border-white/5 hover:border-white/10 transition-all group space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-black text-white">{form.title}</h3>
                    {form.isActive ? (
                      <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-zinc-800 text-zinc-600 border border-white/5">Inactive</span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 font-medium line-clamp-2">{form.description || 'No description'}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                <span>{(form.fields as FormField[]).length} Questions</span>
                <span>•</span>
                <span>{form.icon}</span>
                <span>•</span>
                <span className={form.color}>●</span>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  onClick={() => setEditingForm(form)}
                  variant="outline"
                  className="flex-1 h-10 rounded-xl border-white/10 text-xs font-bold gap-2"
                >
                  <Pencil className="size-3" /> Edit
                </Button>
                <Button
                  onClick={() => deleteForm(form.id)}
                  variant="outline"
                  className="h-10 px-4 rounded-xl border-rose-500/20 text-rose-500 hover:bg-rose-500/10 text-xs font-bold"
                >
                  <Trash2 className="size-3" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
