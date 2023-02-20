import { CodePreview } from '@/components/CodePreview'
import shiki from 'shiki'

export const metadata = {
  title: 'Java SpringBoot MongoDB',
}

const markdown = `
# Java SpringBoot MongoDB
`.trim()

export default async function JavaSpringbootMongoDB() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  })

  const code = highlighter.codeToHtml(markdown, { lang: 'md' })

  return <CodePreview code={code} />
}
