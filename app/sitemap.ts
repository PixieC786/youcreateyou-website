import type { MetadataRoute } from 'next'

const BASE_URL = 'https://youcreateyou.life'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '',                        priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/the-transmission',       priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/the-transmission/preview', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/practice',               priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/journal',                priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/about',                  priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/start',                  priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy',                priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/terms',                  priority: 0.2, changeFrequency: 'yearly' as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
