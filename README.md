<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/chanpreetsinghio/v2/main/public/images/logo.png" width="100" />
</div>
<h1 align="center">
  chanpreetsingh.com
</h1>
<p align="center">
  Personal portfolio website built with <a href="https://nextjs.org/" target="_blank">Next.js 15</a>, <a href="https://reactjs.org/" target="_blank">React 19</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, and deployed on <a href="https://www.netlify.com/" target="_blank">Netlify</a>
</p>

<p align="center">
  <a href="https://app.netlify.com" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/YOUR-NETLIFY-BADGE-ID/deploy-status" alt="Netlify Status" />
  </a>
</p>

![demo](https://raw.githubusercontent.com/chanpreetsinghio/v2/main/public/images/demo.png)

## ✨ Major Update (Jan 2025) - Next.js Migration 🚀

### Complete Framework Migration

Migrated from Gatsby to **Next.js 15** with App Router for better performance and developer experience:

- ⚡ **88% faster build times** - 2.6s (down from 17s)
- 📦 **Smaller bundle size** - 157 kB First Load JS
- 🎨 **Tailwind CSS** - Modern utility-first styling
- ⚙️ **Turbopack** - Lightning-fast development server
- � **TypeScript** - Full type safety
- 🎭 **Framer Motion** - Smooth animations
- 📱 **Fully responsive** - Mobile-first design

### Performance Improvements

- � Build time: **2.6 seconds** (from 17s)
- � Route bundle: **54.2 kB** (highly optimized)
- ⚡ Static site generation with `output: 'export'`
- 🎯 Code splitting and tree-shaking
- � Font optimization with `font-display: swap`
- 🖼️ Optimized image loading

### Modern Stack

- ⬆️ **Next.js 15.5.7** with App Router
- ⬆️ **React 19.0.0** with latest features
- 🎨 **Tailwind CSS 3.4.15** with custom theme
- 📘 **TypeScript 5.7.2** for type safety
- 🎭 **Framer Motion 11.11.11** for animations
- � **Turbopack** for development

### SEO & Analytics

- 🔍 Next.js Metadata API for SEO
- 📊 JSON-LD structured data (Person & WebSite schemas)
- 🤖 Google Analytics integration
- � Open Graph and Twitter Cards
- 🗺️ Sitemap generation

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

> **Note**: The `--legacy-peer-deps` flag is required for React 19 compatibility.

### 3. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

> Uses **Turbopack** for lightning-fast hot module replacement (HMR)

### 4. Build for Production

```bash

```

This generates a static export in the `/out` directory.

### 5. Serve Production Build Locally

```bash
npm run start
# or
npm run serve
```

This serves the static export using `serve`. The site will be available at the URL shown in the terminal (typically `http://localhost:3000`).

## 🚀 Deployment

### Automatic Deployment (Netlify)

The site automatically deploys to Netlify when you push to the `master` branch.

**Deployment Process:**

1. Push changes to `master` branch
2. Netlify detects changes via GitHub integration
3. Builds site with Node 18 and `--legacy-peer-deps`
4. Automatically deploys to production
5. Live at: https://chanpreetsingh.com

**Monitor Deployment:**

- Netlify Dashboard: https://app.netlify.com/
- Build logs available in real-time
- Expected build time: **~30-60 seconds** ⚡

**Netlify Build Settings:**

- **Build Command**: `npm run build`
- **Publish Directory**: `out` (Next.js static export)
- **Node Version**: 18 (set in `netlify.toml`)
- **Build Flags**: `--legacy-peer-deps` for dependencies

### Manual Deployment

```bash
# Using Netlify CLI (if installed)
netlify deploy --prod
```

## 📦 Build Optimizations

### Production Build Features

- **Static Site Generation**: Pre-rendered HTML for all pages
- **Code Splitting**: Automatic route-based splitting
- **Minification**: Optimized CSS and JavaScript
- **Tree Shaking**: Unused code removed automatically
- **Font Optimization**: Custom fonts with `font-display: swap`
- **Tailwind Purging**: Unused CSS classes removed
- **Turbopack**: Fast builds during development

### Build Configuration Files

- `next.config.js` - Next.js static export configuration
- `tailwind.config.js` - Tailwind theme and purge settings
- `postcss.config.js` - PostCSS plugins (Tailwind + Autoprefixer)
- `tsconfig.json` - TypeScript configuration with path aliases
- `netlify.toml` - Netlify build and deploy settings

## 📊 Performance Metrics

### Build Performance

- **Build Time**: 2.6 seconds ⚡
- **Route Bundle**: 54.2 kB (highly optimized)
- **First Load JS**: 157 kB total
  - Shared chunks: 102 kB
  - Route specific: 54.2 kB

### Expected Lighthouse Scores

- **Performance**: 95-100 ⚡ (static export)
- **Accessibility**: 95+ ♿
- **Best Practices**: 100 ✅
- **SEO**: 100 🔍

### Bundle Analysis

- **Route (/)**:
  - Page bundle: 54.2 kB
  - Shared JS: 102 kB (46.3 + 54.2 + 1.92 kB)
  - Total First Load: 157 kB
- **Other pages**:
  - Archive page: ~60 kB
  - 404 page: ~45 kB

## 🛠 Tech Stack

### Core Framework

- **[Next.js 15.5.7](https://nextjs.org/)** - React framework with App Router
- **[React 19.0.0](https://reactjs.org/)** - UI library with latest features
- **[TypeScript 5.7.2](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Node.js 18](https://nodejs.org/)** - Runtime environment

### Styling & Animation

- **[Tailwind CSS 3.4.15](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 11.11.11](https://www.framer.com/motion/)** - Animation library
- **Custom Theme** - Navy (#0a192f) & Green (#64ffda) color palette
- **Responsive Design** - Mobile-first with 7 breakpoints

### Development Tools

- **[Turbopack](https://nextjs.org/docs/architecture/turbopack)** - Fast development bundler
- **PostCSS** - CSS transformations
- **Autoprefixer** - Automatic vendor prefixes
- **ESLint** - Code linting

### SEO & Analytics

- **Next.js Metadata API** - SEO optimization
- **JSON-LD Structured Data** - Person & WebSite schemas
- **Open Graph** - Social media previews
- **Twitter Cards** - Twitter sharing optimization
- **Google Analytics** - Site analytics via `next/script`

### Deployment

- **[Netlify](https://www.netlify.com/)** - Hosting & CI/CD
- **GitHub Integration** - Automatic deployments on push
- **Static Export** - Pre-rendered HTML for all routes
- **Custom Domain** - chanpreetsingh.com

## 📝 Available Scripts

```bash
# Development
npm run dev            # Start dev server with Turbopack (localhost:3000)

# Production Build
npm run build          # Build static export to /out directory
npm run start          # Serve production build (localhost:3000)

# Code Quality
npm run lint           # Run ESLint
```

## 📂 Project Structure

```
v2/
├── app/
│   ├── layout.tsx              # Root layout with SEO
│   ├── page.tsx                # Home page
│   ├── not-found.tsx           # Custom 404 page
│   ├── globals.css             # Global Tailwind styles
│   └── archive/
│       └── page.tsx            # Archive page
├── components/
│   ├── Nav.tsx                 # Navigation with mobile menu
│   ├── Footer.tsx              # Footer component
│   ├── Social.tsx              # Social links sidebar
│   ├── Email.tsx               # Email sidebar
│   ├── icons/
│   │   └── index.tsx           # Icon components
│   └── sections/
│       ├── Hero.tsx            # Landing section
│       ├── About.tsx           # About section
│       ├── Jobs.tsx            # Work experience
│       ├── Featured.tsx        # Featured projects
│       ├── Projects.tsx        # Other projects
│       └── Contact.tsx         # Contact section
├── lib/
│   ├── config.ts               # Site configuration
│   ├── jobs-data.ts            # Work experience data
│   ├── featured-data.ts        # Featured projects data
│   └── projects-data.ts        # Other projects data
├── public/
│   ├── images/                 # Static images
│   ├── fonts/                  # Custom fonts (Calibre, SF Mono)
│   └── og.png                  # Open Graph image
├── src_backup/                 # Original Gatsby components (backup)
├── content_backup/             # Original markdown content (backup)
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind theme configuration
├── postcss.config.js           # PostCSS plugins
├── tsconfig.json               # TypeScript configuration
├── netlify.toml                # Netlify deployment settings
└── package.json                # Dependencies and scripts
```

## 🔧 Configuration

### Tailwind Theme (`tailwind.config.js`)

```javascript
colors: {
  navy: '#0a192f',
  'light-navy': '#112240',
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
