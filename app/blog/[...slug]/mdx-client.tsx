'use client'

import { MDXLayoutRenderer } from 'pliny/mdx-components'
import type { MDXComponents } from 'mdx/types'
import TOCInline from 'pliny/ui/TOCInline'
import type { TOCInlineProps } from 'pliny/ui/TOCInline'

interface ClientMDXContentProps {
  code: string
  components: MDXComponents
  toc: TOCInlineProps['toc']
}

export function ClientMDXContent({ code, components, toc }: ClientMDXContentProps) {
  if (!code) {
    return <div>Error: No content available</div>
  }

  return (
    <div className="prose max-w-none dark:prose-invert">
      <MDXLayoutRenderer code={code} components={components} toc={toc} />
    </div>
  )
}
