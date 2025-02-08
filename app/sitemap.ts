import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  // Blog routes with full metadata
  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.lastmod || post.date,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

  // Tag routes
  const tagRoutes = Array.from(new Set(allBlogs.flatMap((post) => post.tags || []))).map((tag) => ({
    url: `${siteUrl}/tags/${tag}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: 0.5,
  }))

  // Core pages with appropriate priorities
  const coreRoutes = [
    {
      url: siteUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tags`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  return [...coreRoutes, ...blogRoutes, ...tagRoutes]
}
