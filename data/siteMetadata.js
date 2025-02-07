/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Master Machine Learning with AI | SiliconTutor: From Books to Mastery', // More SEO-focused title
  author: 'Silicontutor', // More professional
  headerTitle: 'Silicontutor',
  description:
    'Silicontutor transforms technical books into interactive, AI-powered learning paths. Master machine learning, data science, and AI engineering with guided practice, real-world projects, and a 24/7 AI tutor.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.silicontutor.com', // **REPLACE WITH YOUR ACTUAL DOMAIN** // **REPLACE WITH YOUR REPO (or remove if not applicable)**
  siteLogo: '/static/images/logo.png', // Update this path
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`, // Keep, ensure path
  mastodon: '', // Add if you have a Mastodon account
  //email: 'contact@silicontutor.com', // **REPLACE WITH YOUR ACTUAL EMAIL**
  //github: 'https://github.com/your-github-profile', // **REPLACE WITH YOUR GITHUB (or remove)**
  //x: 'https://twitter.com/your-twitter-handle', // **REPLACE WITH YOUR TWITTER (or remove)**
  //facebook: 'https://www.facebook.com/your-facebook-page', // **REPLACE (or remove)**
  //youtube: 'https://www.youtube.com/your-youtube-channel', // **REPLACE (or remove)**
  //linkedin: 'https://www.linkedin.com/company/silicontutor/', // **REPLACE (or remove - use company page if possible)**
  //threads: 'https://www.threads.net/@your-threads-handle', // **REPLACE (or remove)**
  // instagram: 'https://www.instagram.com/your-instagram-handle', // **REPLACE (or remove)**
  // medium: 'https://medium.com/@your-medium-profile', // **REPLACE (or remove)**
  // bluesky: 'https://bsky.app/profile/your-bluesky-handle', // **REPLACE (or remove)**
  locale: 'en-US',
  stickyNav: false, // Keep as is
  analytics: {
    // Use ONE of these, and configure it correctly in your .env file AND next.config.js
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_PUBLIC_UMAMI_ID,
      // In .env: NEXT_PUBLIC_UMAMI_ID=your-umami-id
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: 'silicontutor.com', // **YOUR DOMAIN**
    //  src: 'https://plausible.io/js/script.js' //If self hosting, use the correct URL
    // },
    // simpleAnalytics: {}, // Configure if using
    // posthogAnalytics: {
    //   posthogProjectApiKey: process.env.NEXT_PUBLIC_POSTHOG_API_KEY, // In .env
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, // In .env: NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXX
    // },
  },
  newsletter: {
    provider: 'sendpulse', // Or your chosen provider (mailchimp, convertkit, etc.)
    // Make sure to configure the .env variables for your chosen provider
  },
  comments: {
    provider: 'giscus', // Or your chosen provider (utterances, disqus)
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO, // In .env
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID, // In .env
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY, // In .env
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID, // In .env
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents
    },
    // algoliaConfig: { // Only if using Algolia - configure correctly
    //   appId: 'YOUR_ALGOLIA_APP_ID',
    //   apiKey: 'YOUR_ALGOLIA_API_KEY',
    //   indexName: 'your_index_name',
    // },
  },
}

module.exports = siteMetadata
