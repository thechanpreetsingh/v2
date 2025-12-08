# 🚀 GitHub Pages Deployment Guide

## Current Situation

You're using **GitHub Pages** for deployment, not Netlify. Your site is deployed at:
- **https://chanpreetsingh.com**

## Two Deployment Methods

### Method 1: GitHub Actions (Recommended) ✨

GitHub Actions will automatically build and deploy when you push to master.

#### Setup Steps:

1. **Enable GitHub Pages in Repository Settings**
   - Go to: https://github.com/thechanpreetsingh/v2/settings/pages
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions"
     - Click Save

2. **Push Your Code** (including the workflow file)
   ```bash
   git add .
   git commit -m "Add GitHub Actions workflow and SEO optimizations"
   git push origin master
   ```

3. **Wait for Deployment**
   - Go to: https://github.com/thechanpreetsingh/v2/actions
   - Watch the workflow run (takes 2-4 minutes)
   - Status should be ✅ green checkmark

4. **Verify Deployment**
   - Check: https://chanpreetsingh.com/sitemap-index.xml
   - Should show XML content (not 404)

#### Benefits:
- ✅ Automatic deployment on every push
- ✅ No manual steps required
- ✅ Build logs available in GitHub Actions
- ✅ Rollback support

---

### Method 2: Manual gh-pages Deployment

If GitHub Actions doesn't work, use manual deployment.

#### Setup Steps:

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update gatsby-config.js** (if using custom domain)
   
   Check if you have `pathPrefix` set. If your site is at:
   - `chanpreetsingh.com` → No pathPrefix needed ✅
   - `username.github.io/repo-name` → Need pathPrefix

3. **Build and Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

4. **Verify in GitHub Settings**
   - Go to: https://github.com/thechanpreetsingh/v2/settings/pages
   - Should show: "Your site is published at https://chanpreetsingh.com"

---

## Custom Domain Setup (chanpreetsingh.com)

### DNS Configuration

Your DNS needs to point to GitHub Pages:

**A Records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record (if using www):**
```
www.chanpreetsingh.com → thechanpreetsingh.github.io
```

### CNAME File

Create a file named `CNAME` in the `static` folder:

```bash
# This will be copied to public folder during build
echo "chanpreetsingh.com" > static/CNAME
```

---

## 🔧 Fix Sitemap Issue (Current Problem)

### The Issue:
Google Search Console can't read your sitemap because it's not deployed yet.

### The Solution:

#### Step 1: Deploy Your Site

**Option A - Using GitHub Actions (Recommended):**
```bash
# Make sure GitHub Actions is enabled in settings
git add .
git commit -m "Add SEO optimizations and GitHub Actions workflow"
git push origin master

# Then go to: https://github.com/thechanpreetsingh/v2/actions
# Watch the deployment progress
```

**Option B - Using gh-pages:**
```bash
# Install gh-pages if not installed
npm install --save-dev gh-pages

# Build and deploy
npm run build
npm run deploy
```

#### Step 2: Verify Sitemap is Live

Wait 5 minutes, then check in browser:
- https://chanpreetsingh.com/sitemap-index.xml ✅ Should show XML
- https://chanpreetsingh.com/robots.txt ✅ Should show robots file

#### Step 3: Submit to Google Search Console

1. Go to: https://search.google.com/search-console
2. Click "Sitemaps" in left menu
3. Enter: `sitemap-index.xml`
4. Click "Submit"

**Expected:** ✅ Success

---

## 📋 Quick Deployment Checklist

### First Time Setup:
- [ ] Enable GitHub Pages in repo settings
- [ ] Set source to "GitHub Actions"
- [ ] Create CNAME file in static folder (if using custom domain)
- [ ] Configure DNS records (if using custom domain)

### Every Deployment:
- [ ] Build locally: `npm run build`
- [ ] Test locally: `npm run serve`
- [ ] Commit changes: `git add . && git commit -m "message"`
- [ ] Push to GitHub: `git push origin master`
- [ ] Wait for GitHub Actions to complete
- [ ] Verify site is updated

---

## 🐛 Troubleshooting

### Issue: "Sitemap could not be read"

**Cause:** Site not deployed or deployment failed

**Solution:**
1. Check GitHub Actions: https://github.com/thechanpreetsingh/v2/actions
2. Look for red ❌ (failed) or yellow ⚠️ (in progress)
3. Click on failed workflow to see error logs
4. Common issues:
   - Build fails (check error logs)
   - GitHub Pages not enabled in settings
   - Wrong source selected in Pages settings

### Issue: 404 on sitemap URL

**Cause:** Files not in `public` folder or not deployed

**Solution:**
1. Run `npm run build` locally
2. Check `public/sitemap-index.xml` exists
3. If exists locally but not on site → deployment issue
4. Re-run deployment

### Issue: GitHub Actions workflow not running

**Cause:** GitHub Pages source not set to "GitHub Actions"

**Solution:**
1. Go to repo settings → Pages
2. Under "Build and deployment"
3. Change source from "Deploy from a branch" to "GitHub Actions"
4. Save and push again

### Issue: Custom domain not working

**Cause:** DNS not configured or CNAME file missing

**Solution:**
1. Check DNS records point to GitHub
2. Create `static/CNAME` file with your domain
3. Rebuild and deploy
4. Check GitHub Pages settings shows your domain

---

## 🎯 Current Action Plan

### Right Now:

1. **Enable GitHub Actions in your repo:**
   - Go to: https://github.com/thechanpreetsingh/v2/settings/pages
   - Source: Select "GitHub Actions"

2. **Create CNAME file (if needed):**
   ```bash
   echo "chanpreetsingh.com" > static/CNAME
   ```

3. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Setup GitHub Actions deployment and SEO optimizations"
   git push origin master
   ```

4. **Watch Deployment:**
   - Go to: https://github.com/thechanpreetsingh/v2/actions
   - Wait for green ✅ checkmark (~3-5 minutes)

5. **Verify:**
   - Open: https://chanpreetsingh.com/sitemap-index.xml
   - Should show XML (not 404)

6. **Submit to Google:**
   - Go to Search Console
   - Submit: `sitemap-index.xml`

---

## 📊 Expected Timeline

| Time | Action |
|------|--------|
| Now | Commit and push |
| +1 min | GitHub Actions starts |
| +3-5 min | Build completes |
| +5-7 min | Site deployed |
| +10 min | Verify sitemap works |
| +15 min | Submit to Search Console |
| +1 hour | Google starts crawling |

---

## 💡 Pro Tips

### Always Test Before Deploying
```bash
npm run clean
npm run build
npm run serve
# Check http://localhost:9000
```

### Check Build Status
- GitHub Actions: https://github.com/thechanpreetsingh/v2/actions
- Look for green ✅ or red ❌

### Verify Files Are Deployed
After deployment, check these URLs:
- https://chanpreetsingh.com (homepage)
- https://chanpreetsingh.com/sitemap-index.xml (sitemap)
- https://chanpreetsingh.com/robots.txt (robots)

### Force Rebuild
If changes don't appear:
```bash
npm run clean
npm run build
git commit --allow-empty -m "Trigger rebuild"
git push origin master
```

---

## 🔗 Important Links

- **Your Repository:** https://github.com/thechanpreetsingh/v2
- **GitHub Actions:** https://github.com/thechanpreetsingh/v2/actions
- **Pages Settings:** https://github.com/thechanpreetsingh/v2/settings/pages
- **Your Site:** https://chanpreetsingh.com
- **Search Console:** https://search.google.com/search-console

---

**Ready to deploy?** Follow the "Current Action Plan" above! 🚀
