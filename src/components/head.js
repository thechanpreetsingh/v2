import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
            twitterUsername
            author
            keywords
            siteLanguage
            ogLanguage
          }
        }
      }
    `,
  );

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    author,
    keywords,
    siteLanguage,
    ogLanguage,
  } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };


  return ( 
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang={siteLanguage} />
      
      {/* Primary Meta Tags */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={seo.url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:site_name" content="Chanpreet Singh" />
      <meta property="og:locale" content={ogLanguage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.title} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#0a192f" />
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="ITHa2rjO4GpqESFQG8f-P-qMZpC6AxRxg4hFm06G25Q" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Chanpreet Singh",
            "url": "${siteUrl}",
            "image": "${seo.image}",
            "sameAs": [
              "https://github.com/thechanpreetsingh",
              "https://www.linkedin.com/in/thechanpreetsingh",
              "https://twitter.com/thechansingh",
              "https://www.instagram.com/thechanpreetsingh",
              "https://www.facebook.com/thechanpreetsingh"
            ],
            "jobTitle": "Software Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Oncehub"
            },
            "description": "${defaultDescription}",
            "email": "chat@chanpreetsingh.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "alumniOf": {
              "@type": "Organization",
              "name": "Self-Taught Developer"
            },
            "knowsAbout": ["JavaScript", "TypeScript", "React", "Node.js", "Angular", "PostgreSQL", "Express.js", "Web Development", "Full Stack Development"],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Software Developer",
              "occupationLocation": {
                "@type": "City",
                "name": "Remote"
              },
              "description": "Full Stack Developer specializing in modern web technologies"
            }
          }
        `}
      </script>

      {/* WebSite Schema */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "${siteUrl}",
            "name": "Chanpreet Singh Portfolio",
            "description": "${defaultDescription}",
            "author": {
              "@type": "Person",
              "name": "Chanpreet Singh"
            },
            "inLanguage": "${siteLanguage}",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${siteUrl}/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
