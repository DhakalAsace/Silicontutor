import 'css/prism.css'
import 'katex/dist/katex.css'

// Add revalidate time for ISR
export const revalidate = 60

import { components } from '@/components/MDXComponents'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

// Import layouts
const PostSimple = dynamic(() => import('@/layouts/PostSimple'))
const PostLayout = dynamic(() => import('@/layouts/PostLayout'))
const PostBanner = dynamic(() => import('@/layouts/PostBanner'))

// Import MDX content renderer with proper client/server boundary
const MDXContent = dynamic(() => import('./mdx-content'), {
  ssr: false,
  loading: () => <div className="mt-10 text-center">Loading content...</div>,
})

const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
} as const

// Add type for valid layout names
type LayoutKeys = keyof typeof layouts

// Update defaultLayout to be type-safe
const defaultLayout: LayoutKeys = 'PostLayout'

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const post = allBlogs.find((p) => p.slug === slug)
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  if (!post) {
    return
  }

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  const posts = allBlogs.map((p) => ({
    slug: p.slug.split('/').map((s) => decodeURI(s)),
  }))
  return posts
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'))
  const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)

  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = allBlogs.find((p) => p.slug === slug) as Blog
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  const mainContent = coreContent(post)
  const jsonLd = post.structuredData
  jsonLd['author'] = authorDetails.map((author) => ({
    '@type': 'Person',
    name: author.name,
  }))

  // Make layout selection type-safe
  const layoutName = (post.layout || defaultLayout) as LayoutKeys
  const Layout = layouts[layoutName]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXContent code={post.body.code} components={components} toc={post.toc} />
      </Layout>
    </>
  )
}
