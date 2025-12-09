import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name} - Full Stack Developer`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  category: 'Technology',
  classification: 'Software Development Portfolio',
  openGraph: {
    type: 'website',
    locale: siteConfig.ogLanguage,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} - Portfolio`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack Developer & Software Engineer Portfolio`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterUsername,
    site: siteConfig.twitterUsername,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    'google-site-verification': 'your-google-verification-code-here',
    'msvalidate.01': 'your-bing-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': `${siteConfig.url}#person`,
              name: siteConfig.name,
              alternateName: ['CP Singh', 'TheChanpreetSingh', 'Chanpreet'],
              url: siteConfig.url,
              image: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/images/me.jpg`,
                width: 400,
                height: 400,
                caption: `${siteConfig.name} - Full Stack Developer`
              },
              sameAs: siteConfig.socialMedia.map(social => social.url),
              jobTitle: siteConfig.seo.jobTitle,
              description: siteConfig.description,
              email: siteConfig.email,
              telephone: '+91-XXXXXXXXXX', // Add your phone if you want
              address: {
                '@type': 'Place',
                addressCountry: 'IN',
                addressRegion: 'India'
              },
              nationality: 'Indian',
              worksFor: {
                '@type': 'Organization',
                name: siteConfig.seo.company,
                url: 'https://www.oncehub.com/'
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Your University/College' // Update with actual education
              },
              knowsAbout: siteConfig.seo.specialties,
              hasOccupation: {
                '@type': 'Occupation',
                name: 'Full Stack Developer',
                occupationLocation: {
                  '@type': 'Country',
                  name: 'India'
                },
                estimatedSalary: {
                  '@type': 'MonetaryAmountDistribution',
                  name: 'Competitive',
                  currency: 'INR'
                }
              },
              award: siteConfig.seo.achievements,
              seeks: 'Full Stack Development Opportunities'
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': `${siteConfig.url}#website`,
              name: `${siteConfig.name} - Portfolio`,
              alternateName: ['Chanpreet Singh Portfolio', 'CP Singh Portfolio', 'TheChanpreetSingh'],
              url: siteConfig.url,
              description: siteConfig.description,
              inLanguage: siteConfig.siteLanguage,
              isPartOf: {
                '@type': 'WebSite',
                url: siteConfig.url
              },
              about: {
                '@type': 'Person',
                '@id': `${siteConfig.url}#person`
              },
              publisher: {
                '@type': 'Person',
                '@id': `${siteConfig.url}#person`
              },
              copyrightHolder: {
                '@type': 'Person', 
                '@id': `${siteConfig.url}#person`
              },
              copyrightYear: new Date().getFullYear(),
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteConfig.url}/?search={search_term_string}`,
                'query-input': 'required name=search_term_string'
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: `${siteConfig.name} - Full Stack Development Services`,
              description: 'Professional web development services specializing in React, Next.js, TypeScript, and Node.js',
              provider: {
                '@type': 'Person',
                '@id': `${siteConfig.url}#person`
              },
              areaServed: ['India', 'Global'],
              serviceType: 'Web Development',
              offers: {
                '@type': 'Offer',
                description: 'Full Stack Development, Frontend Development, Backend Development, UI/UX Implementation'
              }
            }),
          }}
        />
      </head>
      <body className="bg-navy text-slate font-sans antialiased">
        <a href="#content" className="skip-to-content">
          Skip to Content
        </a>
        <div id="root">
          {children}
        </div>
        
        {/* Google Analytics - Only load in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=UA-164367397-1`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-164367397-1', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
