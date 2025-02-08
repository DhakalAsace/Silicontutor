'use client'

import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import YouTubeEmbed from './YouTubeEmbed'
import dynamic from 'next/dynamic'
import type { ComponentProps, ComponentType } from 'react'

// Import EmailCollection with no SSR to avoid hydration issues
const EmailCollection = dynamic(() => import('./ui/email-collection'), {
  ssr: false,
  loading: () => <div className="py-24 text-center">Loading email collection form...</div>,
})

// Create a wrapper component for TOCInline that ensures toc is always an array
const TOCInlineWrapper = ({ toc, exclude, ...props }: ComponentProps<typeof TOCInline>) => {
  // Ensure toc is always an array and handle exclude properly
  const tocArray = Array.isArray(toc) ? toc : []
  const excludeArray = Array.isArray(exclude)
    ? exclude
    : typeof exclude === 'string'
      ? [exclude]
      : []
  return <TOCInline toc={tocArray} exclude={excludeArray} {...props} />
}

// Add proper types for each component
type TOCInlineProps = ComponentProps<typeof TOCInline>
type CustomLinkProps = ComponentProps<typeof CustomLink>
type PreProps = ComponentProps<typeof Pre>
type TableWrapperProps = ComponentProps<typeof TableWrapper>

// Cast components with proper types for MDX
export const components = {
  Image,
  TOCInline: TOCInlineWrapper as ComponentType<TOCInlineProps>,
  a: CustomLink as ComponentType<CustomLinkProps>,
  pre: Pre as ComponentType<PreProps>,
  table: TableWrapper as ComponentType<TableWrapperProps>,
  BlogNewsletterForm,
  YouTubeEmbed,
  EmailCollection,
} as MDXComponents
