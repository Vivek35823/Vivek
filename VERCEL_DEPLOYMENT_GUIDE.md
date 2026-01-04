# 🚀 Complete Guide: Deploying VIVEK Website on Vercel

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step-by-Step Deployment](#step-by-step-deployment)
3. [Environment Variables Setup](#environment-variables-setup)
4. [Custom Domain Configuration](#custom-domain-configuration)
5. [Vercel Build & Runtime](#vercel-build--runtime)
6. [Monitoring & Analytics](#monitoring--analytics)
7. [Troubleshooting](#troubleshooting)
8. [Performance Optimization](#performance-optimization)
9. [Maintenance & Updates](#maintenance--updates)
10. [Cost Comparison](#cost-comparison)

---

## Prerequisites

### What You Need:
- ✅ **GitHub Account** (required for Vercel integration)
- ✅ **Vercel Account** (free tier available)
- ✅ **Your Project** pushed to GitHub
- ✅ **Supabase Account** (already have one)
- ✅ **Domain Name** (optional, can use free vercel.app subdomain)
- ✅ **EmailJS Account** (already configured)

### Why Vercel?
| Feature | Vercel | Hostinger |
|---------|--------|-----------|
| Deployment | Git-based (auto-deploy) | Manual upload |
| Build | Automatic | Manual build required |
| Serverless | ✅ Native support | ❌ Limited |
| Cold starts | <100ms | N/A |
| Scaling | Automatic | Manual |
| Preview URLs | ✅ For every PR | ❌ No |
| SSL | ✅ Free & auto-renew | ✅ Free |
| **Cost** | **Free tier available** | **$3-10/month** |

---

## Step-by-Step Deployment

### Step 1: Prepare Your GitHub Repository

**1.1 Ensure project is on GitHub:**
```bash
# Check if git is initialized
git status

# If not initialized, initialize it
git init
git add .
git commit -m "Initial commit - VIVEK project"

# Add GitHub repository (replace with your repo)
git remote add origin https://github.com/YOUR_USERNAME/vivek-foundation.git
git branch -M main
git push -u origin main
```

**1.2 Create `.gitignore` (if not exists):**
Make sure these are ignored:
```
node_modules/
dist/
.env.local
.env
.env.production
```

**1.3 Verify repository is public:**
- Go to your GitHub repo
- Click **Settings** > **Visibility**
- Ensure it's set to **Public** (or private if you have Vercel Pro)

---

### Step 2: Create Vercel Account & Connect GitHub

**2.1 Sign up for Vercel:**
1. Go to https://vercel.com
2. Click **Sign Up**
3. Select **Continue with GitHub**
4. Authorize Vercel to access your GitHub account

**2.2 Import Your Project:**
1. On Vercel dashboard, click **Add New Project** > **Import Project**
2. Paste your GitHub repo URL: `https://github.com/YOUR_USERNAME/vivek-foundation`
3. Click **Import**

---

### Step 3: Configure Project Settings

**3.1 Vercel will auto-detect your project:**
- Framework Preset: `Vite` ✅
- Root Directory: `./` ✅
- Build Command: `vite build` (auto-detected) ✅
- Output Directory: `dist` (auto-detected) ✅

**3.2 Verify these settings:**
1. In Vercel project settings
2. Go to **Settings** > **Build & Development Settings**
3. Confirm:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

**3.3 Root Directory:**
- Should be `./` (default)
- Only change if you have monorepo structure

---

### Step 4: Set Environment Variables on Vercel

**4.1 Go to Environment Variables:**
1. In your Vercel project dashboard
2. Click **Settings** > **Environment Variables**

**4.2 Add Supabase Variables:**
```
Variable Name: VITE_SUPABASE_URL
Value: https://rcapczsnthqgtagwxgyj.supabase.co
Environments: Production, Preview, Development
```

```
Variable Name: VITE_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjYXBjenNudGhxZ3RhZ3d4Z3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0MTIxODIsImV4cCI6MjA4MTk4ODE4Mn0.2a8mZFhAJAOGTwCeHNnalVKeV4eeO7_9RGSNK47eGcU
Environments: Production, Preview, Development
```

**4.3 Add EmailJS Variables (if using):**
```
Variable Name: VITE_EMAILJS_PUBLIC_KEY
Value: YOUR_EMAILJS_PUBLIC_KEY
Environments: Production, Preview, Development
```

```
Variable Name: VITE_EMAILJS_SERVICE_ID
Value: YOUR_SERVICE_ID
Environments: Production, Preview, Development
```

```
Variable Name: VITE_EMAILJS_TEMPLATE_ID
Value: YOUR_TEMPLATE_ID
Environments: Production, Preview, Development
```

**4.4 Get EmailJS Credentials:**
1. Go to https://dashboard.emailjs.com
2. Click **Account** > **API Keys** (get Public Key)
3. Go to **Email Services** (get Service ID)
4. Go to **Email Templates** (get Template ID)

---

### Step 5: Deploy Your Project

**5.1 Automatic Deployment (Recommended):**
- Every push to `main` branch auto-deploys
- Takes ~1-2 minutes
- No manual action needed

**5.2 Manual Deployment (if needed):**
1. Push changes to GitHub
2. Vercel automatically builds & deploys
3. Or click **Deploy** in Vercel dashboard

**5.3 First Deployment:**
1. After connecting repo, Vercel auto-detects and builds
2. Wait for build to complete
3. You'll get a preview URL: `https://your-project-xxxxx.vercel.app`

---

### Step 6: Test Your Deployment

**6.1 Verify Website:**
```
✅ Visit https://your-project-xxxxx.vercel.app
✅ Check home page loads
✅ Test navigation (React Router works)
✅ Check images load (VIVEK.png, pow.png, etc.)
✅ Test language switcher (EN/BN)
✅ Verify favicon visible
```

**6.2 Check Console Errors:**
- Open browser DevTools (F12)
- Go to **Console** tab
- Look for red errors (most should be warnings)
- Check **Network** tab - all files should return 200

**6.3 Test Key Features:**
```
✅ Click navbar links
✅ Navigate to /library, /events, /scholarships
✅ Switch language EN ↔ BN
✅ Check forms (if any)
✅ Test Admin panel login (if implemented)
```

**6.4 Mobile Testing:**
- Open in mobile browser or use DevTools (F12 > Toggle Device Toolbar)
- Verify responsive design works
- Test touch interactions

---

## Custom Domain Configuration

### Option A: Domain Registered at Hostinger/GoDaddy/etc.

**A.1 Add Domain to Vercel:**
1. In Vercel project settings
2. Go to **Domains**
3. Click **Add Domain**
4. Enter: `vivekfoundation.org`
5. Click **Add**

**A.2 Update Domain Nameservers:**
1. Go to your domain registrar (Hostinger, GoDaddy, etc.)
2. Find **DNS Settings** or **Nameservers**
3. Update to Vercel's nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
4. Wait 24-48 hours for propagation

**A.3 Verify Domain:**
1. In Vercel, check if domain shows ✅ (verified)
2. Test: Visit https://vivekfoundation.org

### Option B: Free Vercel Subdomain

**B.1 Use Default Vercel URL:**
- Your site: `https://vivek-foundation.vercel.app`
- No domain registration needed
- Perfect for testing

---

## Vercel Build & Runtime

### Build Process:

**Vercel will automatically:**
1. Install dependencies: `npm install`
2. Build your project: `npm run build`
3. Create optimized `dist/` folder
4. Deploy to Vercel's global CDN

### Build Time:
- Typical: 30-60 seconds
- First build: May take longer (cache miss)
- Subsequent builds: Faster (incremental builds)

### Output Size:
- Your `dist/` folder should be ~50-200 KB
- Check in Vercel **Deployments** tab

### Serverless Functions (Optional):
- Vercel can run Node.js API routes
- Create `api/` folder at root for backend functions
- Example: `api/email.ts` for form submissions

---

## Monitoring & Analytics

### 6.1 Vercel Analytics (Built-in):
1. In Vercel dashboard, click **Analytics**
2. View:
   - Page load times
   - Core Web Vitals
   - Traffic patterns
   - Error rates

### 6.2 Enable Web Analytics (Optional):
1. Go to **Settings** > **Analytics**
2. Toggle **Web Analytics** ON
3. Get insights on user behavior

### 6.3 Monitor Deployments:
1. Click **Deployments** tab
2. See all deployment history
3. View build logs for each deployment

### 6.4 Error Tracking:
- Vercel automatically captures server errors
- View in **Logs** section
- Get alerts for failed deployments (Pro)

---

## Troubleshooting

### Issue 1: Pages Show 404 After Navigation

**Cause:** React Router client-side routing issue

**Solution:**
1. Vercel automatically handles SPA routing ✅
2. No `.htaccess` needed (unlike Hostinger)
3. If still 404:
   - Check **Build & Development Settings**
   - Ensure `Output Directory` is `dist`

### Issue 2: Environment Variables Not Working

**Symptoms:**
- Supabase connection fails
- `import.meta.env.VITE_SUPABASE_URL` is undefined

**Solution:**
1. Verify variables are set in Vercel:
   - **Settings** > **Environment Variables**
2. Redeploy after adding variables:
   - Push new commit to trigger rebuild
   - Or click **Redeploy** in Vercel
3. Check variable names start with `VITE_` (required for Vite)

### Issue 3: Images Not Loading

**Symptoms:**
- Images 404 in production but work locally

**Solution:**
1. Check image paths in code - use `/images/VIVEK.png`
2. Verify `public/` folder doesn't exist (Vite includes at root)
3. Ensure images are in project folder structure
4. Check **Network** tab for exact error

### Issue 4: Build Fails

**Common Causes:**
1. Missing dependencies - check `package.json`
2. TypeScript errors - run `npm run build` locally
3. Environment variables missing - check Vercel settings
4. Node.js version mismatch - Vercel uses Node 18+ (fine)

**Fix:**
1. View build logs in Vercel **Deployments**
2. Look for red error message
3. Fix locally: `npm run build`
4. Push to GitHub
5. Vercel auto-rebuilds

### Issue 5: Slow Performance

**Solutions:**
1. Check **Analytics** > **Web Vitals**
2. Optimize images:
   - Use WebP format
   - Compress before upload
   - Use responsive images
3. Enable **Streaming** in Vercel (auto)
4. Use Vercel's **Image Optimization** (advanced)

### Issue 6: Supabase Connection Error

**Symptoms:**
- Console error: "Connection to Supabase failed"
- Can't fetch data from database

**Solution:**
```typescript
// Check supabaseClient.ts - ensure it's correct:
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verify:
// 1. URL is correct
// 2. Anon key is not expired
// 3. Supabase project is not paused
// 4. Your app is in allowed domain list (Supabase settings)
```

---

## Performance Optimization

### 1. Enable Caching:
```
Vercel handles caching automatically:
✅ Static assets cached for 1 year
✅ Images optimized with Vercel Image
✅ HTML cached intelligently
```

### 2. Optimize Images:
```javascript
// Instead of:
<img src="/images/VIVEK.png" />

// Better (using native lazy loading):
<img src="/images/VIVEK.png" loading="lazy" alt="VIVEK Logo" />
```

### 3. Code Splitting (Vite does this automatically):
- Each route is code-split
- Smaller initial load
- Faster page transitions

### 4. Monitor Core Web Vitals:
1. Go to Vercel **Analytics**
2. Check:
   - **LCP** (Largest Contentful Paint) - should be <2.5s
   - **FID** (First Input Delay) - should be <100ms
   - **CLS** (Cumulative Layout Shift) - should be <0.1

### 5. Use Vercel's Analytics Dashboard:
```
Settings > Analytics > View Web Vitals
- Real-world performance data
- Identify slow pages
- Track improvements
```

---

## Maintenance & Updates

### Regular Tasks:

**Weekly:**
- Monitor error logs (Vercel **Logs**)
- Check website loads correctly
- Verify key functionality

**Monthly:**
- Review Analytics
- Update content/images
- Check for broken links
- Backup Supabase data

**Quarterly:**
- Update dependencies: `npm update`
- Review performance metrics
- Test on different browsers

### Deployment Workflow:

```bash
# 1. Make changes locally
# 2. Test: npm run dev

# 3. Build test: npm run build

# 4. Push to GitHub
git add .
git commit -m "Feature: description"
git push origin main

# 5. Vercel auto-deploys
# 6. Wait 1-2 minutes
# 7. Visit your domain - done!
```

### Rollback to Previous Version:

**If deployment is broken:**
1. In Vercel **Deployments**
2. Find previous working deployment
3. Click three dots (**...**)
4. Select **Promote to Production**
5. Instant rollback ✅

---

## Cost Comparison

| Feature | Vercel Free | Vercel Pro | Hostinger |
|---------|-------------|-----------|-----------|
| **Hosting** | Free | $20/month | $3-10/month |
| **Bandwidth** | 100 GB/month | Unlimited | Unlimited |
| **Build time** | 6000 min/month | Unlimited | Unlimited |
| **Deployments** | Unlimited | Unlimited | Limited |
| **SSL** | ✅ Free | ✅ Free | ✅ Free |
| **Analytics** | Basic | Advanced | Limited |
| **Uptime** | 99.95% | 99.99% | 99.9% |
| **Serverless** | Limited | Full | Limited |
| **Custom domains** | ✅ Free | ✅ Free | ✅ Free |
| **Preview URLs** | ✅ Yes | ✅ Yes | ❌ No |

**Recommendation:** Start with **Vercel Free Tier** - perfect for your use case!

---

## Environment Variables Reference

**Complete list of variables to set in Vercel:**

```env
# Supabase (Required)
VITE_SUPABASE_URL=https://rcapczsnthqgtagwxgyj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# EmailJS (If using email forms)
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id

# Optional: Analytics
VITE_GA_ID=google_analytics_id (if using Google Analytics)
```

---

## Quick Deployment Checklist

- ✅ GitHub repository created and code pushed
- ✅ Vercel account created
- ✅ Project imported in Vercel
- ✅ Environment variables set in Vercel
- ✅ Build settings verified (Build: `npm run build`, Output: `dist`)
- ✅ First deployment complete
- ✅ Website accessible and working
- ✅ Navigation links functional (React Router)
- ✅ Images loading correctly
- ✅ Language switcher working (EN/BN)
- ✅ Supabase connection verified
- ✅ Domain configured (optional)
- ✅ Analytics enabled
- ✅ Custom domain added (if applicable)

---

## Next Steps (After Initial Deployment)

1. ✅ Test website thoroughly
2. ✅ Set up custom domain (vivekfoundation.org)
3. ✅ Enable Vercel Analytics
4. ✅ Configure error alerts (Vercel Pro - optional)
5. ✅ Set up automated backups (Supabase)
6. ✅ Document admin credentials securely
7. ✅ Plan content update schedule
8. ✅ Monitor performance metrics

---

## Support Resources

### Vercel Documentation:
- https://vercel.com/docs
- https://vercel.com/docs/concepts/next.js/overview
- https://vercel.com/guides

### React Router on Static Hosting:
- https://reactrouter.com/start/library/vite

### Supabase Documentation:
- https://supabase.com/docs

### Vite Documentation:
- https://vitejs.dev/guide/

---

## Emergency Contacts & Resources

| Service | Link | Support |
|---------|------|---------|
| **Vercel** | https://vercel.com | Dashboard Support |
| **Supabase** | https://supabase.com/support | Email: support@supabase.io |
| **GitHub** | https://github.com/support | https://support.github.com |

---

## Success Indicators

✅ You've successfully deployed to Vercel when:
- Website loads without 404 errors
- Navigation between pages works
- Images display correctly
- Supabase data fetches successfully
- Language switcher functions
- Admin panel is accessible
- No red errors in browser console
- Analytics shows traffic

---

**Document Version:** 1.0  
**Last Updated:** January 4, 2026  
**Status:** Ready for Deployment

---

## Quick Start Command (TL;DR)

```bash
# 1. Make sure everything is committed to GitHub
git status
git add .
git commit -m "Ready for Vercel deployment"
git push origin main

# 2. Go to https://vercel.com
# 3. Click "Import Project"
# 4. Select your GitHub repo
# 5. Set environment variables (4 steps above)
# 6. Click "Deploy"
# 7. Done! ✅
```
