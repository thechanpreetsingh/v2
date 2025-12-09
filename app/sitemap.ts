import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'

// Add the export config for static generation
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/archive`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // You can add dynamic pages here if you have blog posts or projects with individual pages
  // const dynamicPages = []

  return [...staticPages]
}