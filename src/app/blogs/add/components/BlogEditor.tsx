'use client'

import { useState } from 'react'
import { EditorContent, useEditor, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import {
  Bold,
  Italic,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Code,
  Quote,
  Undo,
  Redo,
  Image as ImageIcon,
  Minus,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type BlogEditorProps = {
  setContent: (content: string) => void
}

type MenubarProps = {
  editor: Editor | null
}

const Menubar = ({ editor }: MenubarProps) => {
  const [imageUrl, setImageUrl] = useState('')
  const [showImageInput, setShowImageInput] = useState(false)

  if (!editor) return null

  const buttons = [
    { icon: <Bold size={18} />, cmd: () => editor.chain().focus().toggleBold().run(), active: editor.isActive('bold') },
    { icon: <Italic size={18} />, cmd: () => editor.chain().focus().toggleItalic().run(), active: editor.isActive('italic') },
    { icon: <Strikethrough size={18} />, cmd: () => editor.chain().focus().toggleStrike().run(), active: editor.isActive('strike') },
    { icon: <Code size={18} />, cmd: () => editor.chain().focus().toggleCodeBlock().run(), active: editor.isActive('codeBlock') },
    { icon: <Heading1 size={18} />, cmd: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), active: editor.isActive('heading', { level: 1 }) },
    { icon: <Heading2 size={18} />, cmd: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: editor.isActive('heading', { level: 2 }) },
    { icon: <Heading3 size={18} />, cmd: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), active: editor.isActive('heading', { level: 3 }) },
    { icon: <List size={18} />, cmd: () => editor.chain().focus().toggleBulletList().run(), active: editor.isActive('bulletList') },
    { icon: <ListOrdered size={18} />, cmd: () => editor.chain().focus().toggleOrderedList().run(), active: editor.isActive('orderedList') },
    { icon: <Quote size={18} />, cmd: () => editor.chain().focus().toggleBlockquote().run(), active: editor.isActive('blockquote') },
    { icon: <Minus size={18} />, cmd: () => editor.chain().focus().setHorizontalRule().run() },
    { icon: <Undo size={18} />, cmd: () => editor.chain().focus().undo().run() },
    { icon: <Redo size={18} />, cmd: () => editor.chain().focus().redo().run() },
  ]

  const handleImageInsert = () => {
    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run()
      setImageUrl('')
      setShowImageInput(false)
    }
  }

  return (
    <div className="sticky top-16 z-20 flex flex-col items-center w-full">
      <div className="
        flex items-center justify-center gap-3 px-4 py-2
        bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/10
        rounded-full shadow-md
      ">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={btn.cmd}
            className={`p-2 rounded-md transition-all hover:bg-white/10 
              ${btn.active ? 'text-blue-400 bg-white/10' : 'text-gray-400 hover:text-white'}
            `}
          >
            {btn.icon}
          </button>
        ))}

        <button
          onClick={() => setShowImageInput(!showImageInput)}
          className="p-2 rounded-md hover:bg-white/10 text-gray-400 hover:text-white"
        >
          <ImageIcon size={18} />
        </button>
      </div>

      {showImageInput && (
        <div className="mt-3 flex items-center gap-2 bg-white/5 border border-white/10 p-2 rounded-xl">
          <Input
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="bg-transparent border-none focus:ring-0 text-sm text-gray-300"
          />
          <Button size="sm" onClick={handleImageInsert}>Add</Button>
        </div>
      )}
    </div>
  )
}

export default function BlogEditor({ setContent }: BlogEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: '',
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class:
          ' focus:outline-none max-md:w-[450px] md:min-w-[650px] max-w-[900px] mx-auto mt-10 px-4 py-6 rounded-lg bg-transparent text-black text-lg leading-relaxed min-h-[70vh] border dark:border-gray-300/10 border-black text-black/90 dark:text-white/90 shadow-sm',
      },
      
    },
    immediatelyRender:false
  })

  return (
    <div className='w-full h-fit mb-10'>
      <Menubar editor={editor} />
      <div className="w-full flex justify-center">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
