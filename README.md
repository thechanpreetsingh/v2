<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/chanpreetsinghio/v2/main/src/images/logo.png" width="100" />
</div>
<h1 align="center">
  chanpreetsingh.com
</h1>
<p align="center">
  Personal portfolio website built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby 5</a>, <a href="https://reactjs.org/" target="_blank">React 18</a>, and deployed on <a href="https://www.netlify.com/" target="_blank">Netlify</a>
</p>

<p align="center">
  <a href="https://app.netlify.com" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/YOUR-NETLIFY-BADGE-ID/deploy-status" alt="Netlify Status" />
  </a>
</p>

![demo](https://raw.githubusercontent.com/chanpreetsinghio/v2/main/src/images/demo.png)

## ✨ Recent Updates (Dec 2025)

### Performance Optimizations

- ⚡ **85-95+ Lighthouse Performance Score** (up from 60-70)
- 🎨 Fixed NO_LCP error - LCP now measurable (~1.0-1.5s)
- 📦 **60-65% bundle size reduction** via code splitting
- 🔤 Font display optimization (960ms savings)
- 🚀 Build time: **17 seconds**
- ✅ Minified CSS & JavaScript
- 🌲 Tree-shaking and dead code elimination

### SEO Enhancements

- 🔍 **100/100 SEO Score** on Lighthouse
- 📊 Added JSON-LD structured data (Person & WebSite schemas)
- 🗺️ Optimized sitemap with priorities
- 🤖 robots.txt configured
- 📱 Mobile-first optimizations
- 🏷️ Enhanced meta tags for social media

### Technical Stack

- ⬆️ Upgraded to **Gatsby 5.13.7** (from 3.4.1)
- ⬆️ Upgraded to **React 18.3.1** (from 17.0.2)
- 📦 Webpack optimizations (vendor/common/runtime chunks)
- 🔧 Babel plugins for production optimizations
- 🖼️ Image optimization with WEBP/AVIF formats

## 🚨 Forking this repo (please read!)

Many people have contacted me asking me if they can use this code for their own website, and the answer to that question is usually **yes, with attribution**.

I value keeping my site open source, but as you all know, _**plagiarism is bad**_. It's always disheartening whenever I find that someone has copied my site without giving me credit. I spent a non-trivial amount of effort building and designing this iteration of my website, and I am proud of it! All I ask of you all is to not claim this effort as your own.

Please also note that I did not build this site with the intention of it being a starter theme, so if you have questions about implementation, please refer to the [Gatsby docs](https://www.gatsbyjs.org/docs/).

### TL;DR

Yes, you can fork this repo. Please give me proper credit by linking back to [chanpreetsingh.com](https://chanpreetsingh.com). Thanks!

## � Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.x or higher ([Download](https://nodejs.org/))
- **npm**: v9.x or higher (comes with Node.js)
- **Git**: For version control

## 🛠 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/thechanpreetsingh/v2.git
cd v2
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

> **Note**: The `--legacy-peer-deps` flag is required due to peer dependency conflicts between Gatsby 5 packages.

### 3. Start Development Server

```bash
npm start
# or
npm run develop
```

The site will be available at `http://localhost:8000`

GraphQL playground: `http://localhost:8000/___graphql`

### 4. Build for Production (Local Testing)

```bash
# Clean previous builds
npm run clean

# Build production bundle
npm run build

# Serve production build locally
npm run serve
```

Production build will be available at `http://localhost:9000`

## 🚀 Deployment

### Automatic Deployment (Netlify)

The site automatically deploys to Netlify when you push to the `master` branch.

**Deployment Process:**

1. Push changes to `master` branch
2. Netlify detects changes via GitHub integration
3. Builds site with Node 18 and optimizations
4. Automatically deploys to production
5. Live at: https://chanpreetsingh.com

**Monitor Deployment:**

- Netlify Dashboard: https://app.netlify.com/
- Build logs available in real-time
- Expected build time: ~3-5 minutes

**Netlify Build Settings:**

- **Build Command**: `npm run build`
- **Publish Directory**: `public`
- **Node Version**: 18 (set in `.nvmrc` and `netlify.toml`)
- **Environment Variables**: Set in `.env.production`

### Manual Deployment

Netlify automatically deploys from GitHub, but you can also:

```bash
# Trigger a manual deploy from Netlify dashboard
# Or use Netlify CLI (if installed)
netlify deploy --prod
```

## 📦 Build Optimizations

### Production Build Features

- **Code Splitting**: Vendor, common, and runtime chunks
- **Minification**: CSS and JavaScript compressed
- **Tree Shaking**: Unused code removed
- **No Source Maps**: Smaller bundle sizes
- **PropTypes Removed**: Production builds exclude PropTypes
- **Console.log Removed**: Only error/warn kept in production
- **Font Optimization**: font-display: swap (960ms savings)

### Build Configuration Files

- `.env.production` - Production environment variables
- `.babelrc.js` - Babel optimizations for production
- `gatsby-node.js` - Webpack chunking and optimization
- `gatsby-config.js` - Gatsby plugins and configurations

## 📊 Performance Metrics

### Lighthouse Scores (Desktop)

- **Performance**: 85-95+ ⚡
- **Accessibility**: 97/100 ♿
- **Best Practices**: 100/100 ✅
- **SEO**: 100/100 🔍

### Core Web Vitals

- **FCP** (First Contentful Paint): 0.3s ✅
- **LCP** (Largest Contentful Paint): 1.0-1.5s ✅
- **TBT** (Total Blocking Time): <300ms ✅
- **CLS** (Cumulative Layout Shift): 0 ✅
- **Speed Index**: 0.7s ✅

### Bundle Sizes (After Optimization)

- JavaScript: ~300KB (minified + gzipped)
  - vendor.js: ~150KB
  - app.js: ~80KB
  - page chunks: ~20KB each
- CSS: ~40KB (minified + gzipped)
- **Total Reduction**: 60-65% from previous version

## 🛠 Tech Stack

### Core

- **[Gatsby 5.13.7](https://www.gatsbyjs.com/)** - Static Site Generator
- **[React 18.3.1](https://reactjs.org/)** - UI Library
- **[Node.js 18](https://nodejs.org/)** - Runtime Environment

### Styling

- **[Styled Components](https://styled-components.com/)** - CSS-in-JS
- **Custom Design System** - Navy & Green theme

### Performance

- **[gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)** - Optimized images
- **[gatsby-plugin-sharp](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/)** - Image processing
- **Webpack Code Splitting** - Smaller bundles
- **Babel Optimizations** - Production minification

### SEO & Analytics

- **[gatsby-plugin-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/)** - XML Sitemap
- **[gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/)** - PWA Manifest
- **[gatsby-plugin-google-gtag](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/)** - Google Analytics
- **JSON-LD Structured Data** - Rich snippets

### Content

- **[gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/)** - Markdown processing
- **[gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/)** - Syntax highlighting
- **[gatsby-remark-images](https://www.gatsbyjs.com/plugins/gatsby-remark-images/)** - Optimized images in markdown

### Deployment

- **[Netlify](https://www.netlify.com/)** - Hosting & CI/CD
- **GitHub Integration** - Automatic deployments
- **Custom Domain** - chanpreetsingh.com

## 📝 Available Scripts

```bash
# Development
npm start              # Start dev server (localhost:8000)
npm run develop        # Same as npm start

# Production Build
npm run build          # Build for production
npm run serve          # Serve production build (localhost:9000)
npm run clean          # Clean cache and build files

# Deployment
# Automatic via Netlify when pushing to master
# Manual deployment via Netlify CLI (if installed):
# netlify deploy --prod

# Code Quality
npm run format         # Format code with Prettier
```

## 📂 Project Structure

```
v2/
├── content/
│   ├── featured/               # Featured projects
│   ├── jobs/                   # Work experience
│   ├── posts/                  # Blog posts
│   └── projects/               # Project descriptions
├── src/
│   ├── components/             # React components
│   │   ├── sections/           # Page sections (Hero, About, etc.)
│   │   └── icons/              # SVG icon components
│   ├── pages/                  # Page components
│   ├── styles/                 # Global styles and theme
│   ├── templates/              # Page templates (blog post, tag)
│   ├── hooks/                  # Custom React hooks
│   ├── utils/                  # Utility functions
│   └── config.js               # Site configuration
├── static/                     # Static assets
│   ├── robots.txt              # Search engine crawlers
│   └── CNAME                   # Custom domain
├── .babelrc.js                 # Babel configuration
├── .env.production             # Production environment variables
├── gatsby-browser.js           # Gatsby browser APIs
├── gatsby-config.js            # Gatsby configuration
├── gatsby-node.js              # Gatsby Node APIs (build optimization)
├── gatsby-ssr.js               # Gatsby SSR APIs
└── package.json                # Dependencies and scripts
```

## 🔧 Configuration

### Site Metadata (`gatsby-config.js`)

```javascript
siteMetadata: {
  title: 'Chanpreet Singh - Software Developer & Full Stack Engineer',
  siteUrl: 'https://chanpreetsingh.com',
  description: '...',
  keywords: 'Chanpreet Singh, Software Developer, ...',
}
```

### Google Analytics

Update tracking ID in `gatsby-config.js`:

```javascript
{
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    trackingIds: ['UA-164367397-1'],
  },
}
```

### Custom Domain

Update `static/CNAME` file with your domain:

```
chanpreetsingh.com
```

## 🐛 Troubleshooting

### Build Errors

**Issue**: `npm install` fails with peer dependency errors

**Solution**:

```bash
npm install --legacy-peer-deps
```

**Issue**: Build fails with "NO_LCP" or performance errors

**Solution**: Already fixed - gatsby-plugin-offline is disabled

**Issue**: Webpack compilation errors

**Solution**:

```bash
npm run clean
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

### Development Server Issues

**Issue**: Port 8000 already in use

**Solution**:

```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9
npm start
```

**Issue**: Hot reload not working

**Solution**:

```bash
npm run clean
npm start
```

## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#112240](https://via.placeholder.com/10/0a192f?text=+) `#112240` |
| Lightest Navy  | ![#233554](https://via.placeholder.com/10/303C55?text=+) `#233554` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Green          | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Design inspired by [Brittany Chiang](https://brittanychiang.com/)

Built with passion by [Chanpreet Singh](https://chanpreetsingh.com)

---

<div align="center">
  <sub>Built with ❤️ using Gatsby</sub>
</div>
