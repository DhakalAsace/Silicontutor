import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  keywords?: string[]
  alternates?: {
    canonical?: string
    languages?: Record<string, string>
  }
  feed?: {
    url: string
    type: string
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  keywords,
  alternates,
  feed,
  ...rest
}: PageSEOProps): Metadata {
  const metaDescription = description || siteMetadata.description
  const metaImage = image ? [image] : [siteMetadata.socialBanner]

  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
      template: `%s | ${siteMetadata.title}`,
      default: title,
    },
    description: metaDescription,
    keywords: keywords || [
      'machine learning',
      'AI',
      'data science',
      'machine learning books',
      'learning data science',
    ],
    authors: [{ name: siteMetadata.author }],
    creator: siteMetadata.author,
    publisher: siteMetadata.author,
    alternates: {
      canonical: alternates?.canonical,
      languages: alternates?.languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: metaDescription,
      url: './',
      siteName: siteMetadata.title,
      images: metaImage.map((img) => ({
        url: img.includes('http') ? img : `${siteMetadata.siteUrl}${img}`,
        width: 1200,
        height: 630,
        alt: title,
      })),
      locale: siteMetadata.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteMetadata.title}`,
      description: metaDescription,
      images: metaImage,
      creator: siteMetadata.twitter || '@silicontutor',
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      // @ts-expect-error Bing isn't in Next's Verification type
      bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
    },
    ...(feed && {
      alternates: {
        ...alternates,
        types: {
          'application/rss+xml': feed.url,
        },
      },
    }),
    ...rest,
  }
}
