'use client'

import type { MDXComponents } from 'mdx/types'
import dynamic from 'next/dynamic'

// Import components with dynamic to avoid SSR issues
const TOCInline = dynamic(() => import('pliny/ui/TOCInline'), {
  ssr: false,
  loading: () => <div>Loading Table of Contents...</div>,
})

const EmailCollection = dynamic(() => import('@/components/ui/email-collection'), {
  ssr: false,
  loading: () => <div className="py-24 text-center">Loading email collection form...</div>,
})

// Create type-safe interfaces
interface TOCProps {
  toc: Array<{ value: string; url: string; depth: number }>
  exclude?: string | string[]
}

// Create wrapper components with proper type safety
const TOCInlineWrapper = ({ toc, exclude, ...props }: TOCProps) => {
  const tocArray = Array.isArray(toc) ? toc : []
  const excludeArray = Array.isArray(exclude)
    ? exclude
    : typeof exclude === 'string'
      ? [exclude]
      : []

  return <TOCInline toc={tocArray} exclude={excludeArray} {...props} />
}

// Export the useMDXComponents function
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    TOCInline: TOCInlineWrapper,
    EmailCollection: () => <EmailCollection />,
    ...components,
  }
}
