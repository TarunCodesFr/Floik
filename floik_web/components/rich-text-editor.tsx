"use client"

import React, { useCallback } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Image from "@tiptap/extension-image"
import HorizontalRule from "@tiptap/extension-horizontal-rule"
import Placeholder from "@tiptap/extension-placeholder"
import {
  Bold, Italic, Underline as UnderlineIcon, Heading1, Heading2, Heading3,
  ImageIcon, Minus, Loader2,
} from "lucide-react"
import { toast } from "sonner"

const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"
const apiUrl = apiBase.startsWith("http") ? apiBase : `https://${apiBase}`

interface RichTextEditorProps {
  content: any
  onChange: (json: any) => void
  placeholder?: string
}

export default function RichTextEditor({ content, onChange, placeholder }: RichTextEditorProps) {
  const [uploading, setUploading] = React.useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        horizontalRule: false,
      }),
      Underline,
      Image,
      HorizontalRule,
      Placeholder.configure({ placeholder: placeholder || "Write something..." }),
    ],
    content: content || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON())
    },
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none focus:outline-none min-h-[200px] px-4 py-3",
      },
      handleDOMEvents: {
        keydown: (_view, event) => {
          if (event.key === "Enter" && event.shiftKey) {
            event.preventDefault()
            editor?.chain().focus().setHardBreak().run()
            return true
          }
          return false
        },
      },
    },
  })

  const handleImageUpload = useCallback(async () => {
    const input = document.createElement("input")
    input.type = "file"
    input.accept = "image/jpeg,image/png,image/webp,image/gif"
    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return

      const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
      if (!validTypes.includes(file.type)) {
        toast.error("Invalid file type. Only JPG, PNG, WEBP, and GIF are allowed.")
        return
      }

      if (file.size > 10 * 1024 * 1024) {
        toast.error("File is too large. Maximum size is 10MB.")
        return
      }

      setUploading(true)
      try {
        const formData = new FormData()
        formData.append("file", file)

        const res = await fetch(`${apiUrl}/api/upload/forum-image`, {
          method: "POST",
          credentials: 'include',
          body: formData,
        })

        if (!res.ok) throw new Error("Upload failed")
        const data = await res.json()

        editor?.chain().focus().setImage({ src: data.url }).run()
      } catch (e) {
        toast.error("Image upload failed");
        console.error("Image upload failed", e)
      }
      setUploading(false)
    }
    input.click()
  }, [editor])

  if (!editor) return null

  const ToolButton = ({ active, onClick, children }: { active?: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      onClick={onClick}
      className={`p-1.5 rounded-md transition-colors ${
        active ? "bg-primary/20 text-primary" : "text-zinc-400 hover:text-white hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  )

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden">
      <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-white/10 bg-zinc-900/50">
        <ToolButton active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold size={16} />
        </ToolButton>
        <ToolButton active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic size={16} />
        </ToolButton>
        <ToolButton active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon size={16} />
        </ToolButton>
        <div className="w-px h-5 bg-white/10 mx-1" />
        <ToolButton active={editor.isActive("heading", { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          <Heading1 size={16} />
        </ToolButton>
        <ToolButton active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          <Heading2 size={16} />
        </ToolButton>
        <ToolButton active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          <Heading3 size={16} />
        </ToolButton>
        <div className="w-px h-5 bg-white/10 mx-1" />
        <ToolButton active={false} onClick={handleImageUpload}>
          {uploading ? <Loader2 size={16} className="animate-spin" /> : <ImageIcon size={16} />}
        </ToolButton>
        <ToolButton active={false} onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <Minus size={16} />
        </ToolButton>
      </div>
      <EditorContent editor={editor} />
    </div>
  )
}
