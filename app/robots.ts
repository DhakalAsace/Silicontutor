import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*', '/_next/*', '/_vercel/*', '/static/images/*', '/*.json'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/blog/*', '/tags/*'],
        disallow: ['/*'],
      },
      {
        userAgent: 'CCBot',
        disallow: ['/*'],
      },
    ],
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
    host: siteMetadata.siteUrl,
  }
}
