'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = { value: string; className?: string }

/** Render CMS markdown safely as semantic HTML, avoiding literal ### tokens in UI. */
export function RichText({ value, className }: Props) {
  if (!value) return null
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h2 {...props} />, // prevent multiple h1s
        }}
      >
        {value}
      </ReactMarkdown>
    </div>
  )
}
