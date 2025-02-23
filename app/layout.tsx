import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import { genPageMetadata } from './seo'
import Script from 'next/script'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

// Extract critical CSS
const criticalCSS = `
  /* Add your critical CSS here */
  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-inter);
  }
  .text-gray-900 { color: #111827; }
  .dark .text-gray-900 { color: #f3f4f6; }
  /* Add other critical styles */
`

export const metadata: Metadata = genPageMetadata({
  title: 'Master Machine Learning with AI',
  description: 'Transform technical books into interactive learning paths',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} ${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <Script
          id="load-css"
          dangerouslySetInnerHTML={{
            __html: `
              const link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = '/styles.css';
              document.head.appendChild(link);
            `,
          }}
        />
        <noscript>
          <link rel="stylesheet" href="/styles.css" />
        </noscript>
        <link rel="icon" href={`${basePath}/static/favicons/favicon.ico`} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SpeedInsights />
          <VercelAnalytics />
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <Header />
              <main className="mb-auto">{children}</main>
            </SearchProvider>
            <Footer />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
