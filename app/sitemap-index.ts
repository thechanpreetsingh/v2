import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'

// For future scalability - when you have many pages
export const dynamic = 'force-static'

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  
  // This could be expanded when you have multiple sitemaps
  // e.g., sitemap-pages.xml, sitemap-posts.xml, sitemap-projects.xml
  return [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: new Date(),
    },
  ]
}