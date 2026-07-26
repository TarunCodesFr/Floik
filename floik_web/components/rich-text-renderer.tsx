import React from "react"
import Image from "next/image"

function renderNode(node: any, index: number): React.ReactNode {
  switch (node.type) {
    case "doc":
      return <>{node.content?.map((child: any, i: number) => renderNode(child, i))}</>

    case "paragraph":
      return (
        <p key={index} className="text-sm text-zinc-300 leading-relaxed mb-3 last:mb-0">
          {node.content?.map((child: any, i: number) => renderNode(child, i)) || <br />}
        </p>
      )

    case "heading":
      const level = node.attrs?.level || 1
      const headingClass = `font-bold text-white tracking-tight mb-3 ${
        level === 1 ? "text-2xl" : level === 2 ? "text-xl" : "text-lg"
      }`
      const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements
      return (
        <HeadingTag key={index} className={headingClass}>
          {node.content?.map((child: any, i: number) => renderNode(child, i))}
        </HeadingTag>
      )

    case "horizontalRule":
      return <hr key={index} className="border-white/10 my-6" />

    case "image":
      return (
        <div key={index} className="my-6 flex justify-center">
          <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden border border-white/10">
            <Image
              src={node.attrs?.src || ""}
              alt={node.attrs?.alt || ""}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )

    case "text":
      let text = <>{node.text}</>
      if (node.marks) {
        for (const mark of node.marks) {
          switch (mark.type) {
            case "bold":
              text = <strong key={index} className="font-bold text-white">{text}</strong>
              break
            case "italic":
              text = <em key={index} className="italic">{text}</em>
              break
            case "underline":
              text = <u key={index} className="underline">{text}</u>
              break
          }
        }
      }
      return <React.Fragment key={index}>{text}</React.Fragment>

    case "hardBreak":
      return <br key={index} />

    case "bulletList":
      return (
        <ul key={index} className="list-disc list-inside space-y-1 mb-3 text-sm text-zinc-300">
          {node.content?.map((child: any, i: number) => renderNode(child, i))}
        </ul>
      )

    case "orderedList":
      return (
        <ol key={index} className="list-decimal list-inside space-y-1 mb-3 text-sm text-zinc-300">
          {node.content?.map((child: any, i: number) => renderNode(child, i))}
        </ol>
      )

    case "listItem":
      return <li key={index}>{node.content?.map((child: any, i: number) => renderNode(child, i))}</li>

    case "blockquote":
      return (
        <blockquote key={index} className="border-l-2 border-primary/40 pl-4 italic text-zinc-400 mb-3">
          {node.content?.map((child: any, i: number) => renderNode(child, i))}
        </blockquote>
      )

    case "codeBlock":
      return (
        <pre key={index} className="bg-zinc-900 rounded-lg p-4 overflow-x-auto mb-3 text-sm text-zinc-300 font-mono border border-white/5">
          <code>{node.content?.map((child: any, i: number) => renderNode(child, i))}</code>
        </pre>
      )

    default:
      return null
  }
}

export default function RichTextRenderer({ content }: { content: any }) {
  if (!content) return null

  const doc = typeof content === "string" ? JSON.parse(content) : content

  return <div className="space-y-1">{renderNode(doc, 0)}</div>
}
