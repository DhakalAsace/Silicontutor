'use client'

import { MDXLayoutRenderer } from 'pliny/mdx-components'
import type { MDXComponents } from 'mdx/types'

interface MDXContentProps {
  code: string
  components: MDXComponents
  toc: Array<{ value: string; url: string; depth: number }>
}

export default function MDXContent({ code, components, toc }: MDXContentProps) {
  if (!code) {
    return <div className="mt-10 text-center text-red-600">Error: No content available</div>
  }

  return (
    <article className="prose max-w-none dark:prose-invert">
      <MDXLayoutRenderer code={code} components={components} toc={toc} />
    </article>
  )
}
