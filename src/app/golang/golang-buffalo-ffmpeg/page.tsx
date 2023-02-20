import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
  title: 'Golang Buffalo FFMPEG',
}

const markdown = `
# Golang Buffalo FFMPEG
`.trim()

export default async function GolangBuffaloFFMPEG() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(markdown, { lang: 'md' })

  return <CodePreview code={code} />
}
