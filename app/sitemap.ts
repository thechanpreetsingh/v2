import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/config'
import { featuredProjects } from '@/lib/featured-data'

// Add the export config for static generation
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const currentDate = new Date()
  
  // Get specific dates for different content types for more accurate lastModified
  const getLastModified = (type: 'homepage' | 'archive' | 'project') => {
    switch (type) {
      case 'homepage':
        // Homepage changes more frequently (profile updates, new projects)
        return new Date(currentDate.setDate(currentDate.getDate() - 1)) // Yesterday
      case 'archive':
        // Archive updated when projects are added
        return new Date(currentDate.setDate(currentDate.getDate() - 7)) // Week ago
      case 'project':
        // Individual projects don't change often once published
        return new Date(currentDate.setDate(currentDate.getDate() - 30)) // Month ago
      default:
        return new Date()
    }
  }

  // Core pages with SEO-optimized priorities and frequencies
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: getLastModified('homepage'),
      changeFrequency: 'daily' as const, // Homepage updated frequently with new content
      priority: 1.0, // Highest priority for main landing page
    },
    {
      url: `${baseUrl}/archive`,
      lastModified: getLastModified('archive'),
      changeFrequency: 'weekly' as const, // Updated when new projects added
      priority: 0.9, // High priority - showcases all work
    },
  ]

  // Key content sections that boost SEO value
  const contentPages: MetadataRoute.Sitemap = [
    // Add anchor-linked sections as separate entries for better indexing
    {
      url: `${baseUrl}/#about`,
      lastModified: getLastModified('homepage'),
      changeFrequency: 'monthly' as const,
      priority: 0.8, // About section is important for personal branding
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: getLastModified('homepage'),
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Work experience is crucial for developers
    },
    {
      url: `${baseUrl}/#work`,
      lastModified: getLastModified('project'),
      changeFrequency: 'weekly' as const,
      priority: 0.85, // Featured projects are high-value content
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: getLastModified('homepage'),
      changeFrequency: 'yearly' as const,
      priority: 0.7, // Contact info doesn't change often
    },
  ]

  // Alternate URLs for better name-based SEO discovery
  const alternatePages: MetadataRoute.Sitemap = [
    // These help with different search patterns
    {
      url: `${baseUrl}/archive/`,
      lastModified: getLastModified('archive'),
      changeFrequency: 'weekly' as const,
      priority: 0.85, // Trailing slash version
    },
  ]

  // Project-specific URLs for better SEO indexing of individual projects
  const projectPages: MetadataRoute.Sitemap = featuredProjects.map((project, index) => ({
    // Create project-specific anchor URLs for better discoverability
    url: `${baseUrl}/#project-${project.title.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: getLastModified('project'),
    changeFrequency: 'yearly' as const,
    priority: 0.75, // High priority for featured work
    // Include project images for image SEO
    images: project.image ? [`${baseUrl}${project.image}`] : undefined,
  }))

  // SEO enhancement: Add image information for key pages
  const enhancedPages = corePages.map(page => {
    // Add image information for pages that have key visuals
    if (page.url === baseUrl) {
      return {
        ...page,
        // Homepage has profile image and og image
        images: [
          `${baseUrl}/images/me.jpg`,
          `${baseUrl}/og.png`,
        ],
      }
    }
    if (page.url === `${baseUrl}/archive`) {
      return {
        ...page,
        // Archive page showcases project images
        images: [
          `${baseUrl}/images/demo.png`,
        ],
      }
    }
    return page
  })

  // Combine all pages for comprehensive sitemap
  return [
    ...enhancedPages,
    ...contentPages,
    ...alternatePages,
    ...projectPages,
  ]
}