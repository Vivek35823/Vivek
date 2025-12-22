# 🚀 Hostinger Deployment Guide - Vivekananda Global Devotees

## Project Overview

Your project is a **React + Vite + TypeScript** frontend application with external service integrations:

- **Frontend:** React 19.2 + Vite 6.4 (SPA - Single Page Application)
- **Database:** Supabase (PostgreSQL)
- **Email Service:** EmailJS

---

## 📊 Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Hostinger Hosting                        │
│  ┌──────────────────────────────────────────────────────┐  │
│  │     Built React App (Static Files in dist/)          │  │
│  │     - HTML, CSS, JS bundles                          │  │
│  │     - Images, assets                                 │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
         ↓                    ↓                    ↓
    ┌─────────┐         ┌──────────┐        ┌──────────┐
    │ Supabase│         │ EmailJS  │        │  Gemini  │
    │  (DB)   │         │ (Email)  │        │ (API)    │
    └─────────┘         └──────────┘        └──────────┘
```

---

## 🎯 Step-by-Step Deployment Process

### Step 1: Prepare Your Project Locally

#### 1.1 Install dependencies (if not already done)
```powershell
npm install
```

#### 1.2 Verify the build works
```powershell
npm run build
```

This creates a `dist/` folder with your production-ready files.

#### 1.3 Test the build locally
```powershell
npm run preview
```

Visit `http://localhost:4173` to ensure everything works.

### Step 2: Set Up Hostinger Account

#### 2.1 Create a Hostinger Account
- Go to [Hostinger.com](https://www.hostinger.com)
- Sign up for a **Web Hosting** plan (recommended: Business plan for PHP support)
- Complete the purchase and verify your domain

#### 2.2 Access Your Hostinger Dashboard
- Log in to your Hostinger account
- Navigate to your domain settings
- You'll have access to:
  - File Manager
  - cPanel/Hepsia Control Panel
  - Email settings
  - SSL certificate

### Step 3: Deploy Your Build Files

#### Option A: Using Hostinger's File Manager (Easiest)

1. **Build your project locally:**
   ```powershell
   npm run build
   ```

2. **In Hostinger Dashboard:**
   - Go to **File Manager**
   - Navigate to your **public_html** folder (main web root)
   - Delete any existing files (optional, but recommended for clean deployment)

3. **Upload dist contents:**
   - Open the `dist/` folder in your local file explorer
   - Select all files and folders from `dist/`
   - Upload them to `public_html` via Hostinger's File Manager

4. **Verify the upload:**
   - All files from `dist/` should be directly in `public_html`
   - Example structure:
     ```
     public_html/
     ├── index.html
     ├── assets/
     │   ├── app-[hash].js
     │   ├── app-[hash].css
     │   └── ...
     ├── images/
     └── ...
     ```

#### Option B: Using FTP (More Control)

1. **Install an FTP client:**
   - FileZilla (free) - https://filezilla-project.org/
   - WinSCP (free) - https://winscp.net/

2. **Get FTP credentials from Hostinger:**
   - Hostinger Dashboard → Settings → FTP
   - Note the FTP hostname, username, and password

3. **Connect and upload:**
   - Open FTP client
   - Connect using Hostinger's FTP credentials
   - Navigate to `public_html/`
   - Upload all files from `dist/` folder

#### Option C: Using Git + Deployments (Advanced)

1. **Push to GitHub:**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/vivek-devotees.git
   git push -u origin main
   ```

2. **Connect Hostinger to GitHub:**
   - Some Hostinger plans support GitHub integration
   - Check Hostinger Dashboard for Git deployment option

### Step 4: Configure Environment Variables on Hostinger

Your Hostinger hosting needs to know your API keys. Since this is a **frontend-only app**, environment variables are embedded during the build process.

#### Option A: Rebuild on Hostinger (Recommended)

If Hostinger supports Node.js (Business plan and above):

1. **Upload your entire project to Hostinger:**
   - Via Git or FTP upload entire folder
   
2. **SSH into your Hostinger account:**
   ```powershell
   # Get SSH credentials from Hostinger Dashboard
   # SSH format: ssh username@server.com
   ssh your-username@your-domain.com
   ```

3. **Install dependencies:**
   ```bash
   cd public_html/
   npm install
   ```

4. **Create .env.local file:**
   ```bash
   nano .env.local
   ```

5. **Add your environment variables:**
   ```
   VITE_SUPABASE_URL=https://rcapczsnthqgtagwxgyj.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   VITE_EMAILJS_PUBLIC_KEY=-NpOQf59AFtneU2uu
   VITE_EMAILJS_SERVICE_ID=service_yuwcyrq
   VITE_EMAILJS_TEMPLATE_ID=template_fmz6vel
   ```

6. **Build the project:**
   ```bash
   npm run build
   ```

7. **Serve the dist folder:**
   - Set public_html to point to `dist/` folder or copy contents

#### Option B: Pre-build Before Upload (Simpler)

1. **Build locally with correct environment:**
   - Keep `.env.local` in your project
   - Run: `npm run build`
   - This embeds all variables into the build

2. **Upload only the `dist/` folder contents to Hostinger**

3. **Your app is ready** - variables are baked into the build!

### Step 5: Configure URL Rewriting (Important for React Router)

Your React app uses client-side routing. Hostinger needs to serve `index.html` for all routes.

#### 5.1 Create `.htaccess` file

In Hostinger's File Manager, in your `public_html/` folder:

1. **Create a new file** named `.htaccess`

2. **Add this content:**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     
     # If the requested file or directory doesn't exist
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     
     # Rewrite all requests to index.html (except specific files)
     RewriteRule ^(.*)$ index.html [L]
   </IfModule>
   ```

3. **Save the file**

This ensures that routes like `/scholarships`, `/contact`, `/admin-panel` work correctly.

### Step 6: Verify SSL/HTTPS

1. **In Hostinger Dashboard:**
   - Go to **Security** or **SSL Certificates**
   - Ensure SSL is **enabled and active**
   - Your domain should have a green padlock icon

2. **Force HTTPS (Recommended):**
   - Add to your `.htaccess`:
     ```apache
     RewriteCond %{HTTPS} off
     RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
     ```

### Step 7: Test Your Deployment

#### 7.1 Visit your website:
- Open your browser
- Go to: `https://your-domain.com`
- You should see your homepage

#### 7.2 Test core functionality:

1. **Navigation:**
   - [ ] Click navbar links
   - [ ] Routes like `/scholarships`, `/contact`, `/donation` work

2. **Contact Form:**
   - [ ] Fill contact form
   - [ ] Submit and check for success message
   - [ ] Verify email received at `info@vivek-global.org`

3. **Scholarship Form:**
   - [ ] Fill scholarship application
   - [ ] Submit and verify data in database
   - [ ] Check Supabase dashboard for new entry

4. **Database Functions:**
   - [ ] Check Admin Panel
   - [ ] Verify members, donations, scholarships display

5. **Check Browser Console:**
   - [ ] Press F12 → Console tab
   - [ ] No red errors should appear
   - [ ] Check warnings/info messages

---

## 🔧 Environment Variables Reference

Your app needs these variables (they're in your `.env.local`):

| Variable | Value | Where to Get | Required? |
|----------|-------|--------------|-----------|
| `VITE_SUPABASE_URL` | `https://rcapczsnthqgtagwxgyj.supabase.co` | Supabase Dashboard | ✅ Yes |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase public key | Supabase Dashboard | ✅ Yes |
| `VITE_EMAILJS_PUBLIC_KEY` | `-NpOQf59AFtneU2uu` | EmailJS Account | ✅ Yes |
| `VITE_EMAILJS_SERVICE_ID` | `service_yuwcyrq` | EmailJS Dashboard | ✅ Yes |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_fmz6vel` | EmailJS Dashboard | ✅ Yes |

**⚠️ Important:** These keys should NOT be committed to GitHub. They're already in your `.env.local` which is in `.gitignore`.

---

## 🐛 Troubleshooting Common Issues

### Issue 1: "Cannot GET /scholarships" 404 Error

**Cause:** `.htaccess` not configured for React Router

**Solution:**
1. Create/verify `.htaccess` file exists in `public_html/`
2. Ensure content is exactly as shown in Step 5
3. Verify `.htaccess` is not hidden/ignored by Hostinger

### Issue 2: External APIs not loading (Supabase, EmailJS)

**Cause:** Environment variables not embedded in build

**Solution:**
1. Verify variables are in `.env.local` before building
2. Rebuild locally: `npm run build`
3. Check browser DevTools Network tab for failed requests
4. Verify API keys are correct in Hostinger

### Issue 3: Emails not sending from contact form

**Solution:**
1. Verify EmailJS Service ID and Template ID are correct
2. Check EmailJS Dashboard → Logs for failed sends
3. Verify Gmail/Outlook account is connected in EmailJS
4. Test locally first: `npm run dev` and submit test form

### Issue 4: Database queries returning empty

**Solution:**
1. Verify Supabase URL and Key are correct
2. Check Supabase RLS policies are configured
3. Verify tables exist in Supabase database
4. Check browser console for specific error messages

### Issue 5: Styling/Images not loading

**Cause:** Wrong asset paths or missing images

**Solution:**
1. Check browser DevTools Network tab for 404s
2. Verify `images/` folder is uploaded to Hostinger
3. Check vite.config.ts for correct asset configuration
4. Rebuild and reupload if paths are wrong

### Issue 6: Very slow page load

**Solution:**
1. Check Hostinger's server performance
2. Enable Gzip compression in Hostinger settings
3. Minify assets (already done by Vite)
4. Verify large images are optimized
5. Consider CDN for static files (Hostinger may offer this)

---

## 📋 Pre-Deployment Checklist

- [ ] **Code is clean:**
  - [ ] No console.log statements with sensitive data
  - [ ] All dependencies installed

- [ ] **Build works locally:**
  - [ ] `npm run build` completes without errors
  - [ ] `npm run preview` shows correct UI
  - [ ] All routes work

- [ ] **Environment variables ready:**
  - [ ] `.env.local` has all keys
  - [ ] No placeholder values
  - [ ] Keys are valid and active

- [ ] **External services configured:**
  - [ ] Supabase database created
  - [ ] EmailJS service and template created

- [ ] **Domain ready:**
  - [ ] Domain purchased/registered
  - [ ] Hostinger account activated
  - [ ] DNS pointing to Hostinger (if needed)

- [ ] **SSL certificate:**
  - [ ] SSL is enabled on Hostinger
  - [ ] Domain is using HTTPS

- [ ] **Post-deployment testing:**
  - [ ] Website loads at your domain
  - [ ] Routes work (no 404s)
  - [ ] Contact form submits successfully
  - [ ] Database operations work
  - [ ] No console errors

---

## 🚀 Quick Deployment Checklist

1. **Locally:** `npm run build`
2. **Hostinger File Manager:** Delete old files in `public_html/`
3. **Upload:** Drag `dist/` contents to `public_html/`
4. **Configure:** Create `.htaccess` for React Router
5. **Verify:** Visit your domain and test
6. **Monitor:** Check browser console for errors

---

## 🔐 Security Notes

1. **Never commit `.env.local` to GitHub** ✅ (already in .gitignore)
2. **Use HTTPS only** - Enable on Hostinger
3. **Keep Supabase RLS policies enabled** - Protects database
4. **Monitor API usage** - Check rate limits on EmailJS and Gemini
5. **Use strong passwords** - For Hostinger and database accounts
6. **Enable email verification** - For membership applications
7. **Regular backups** - Hostinger provides automated backups

---

## 💡 Additional Tips

### Performance Optimization

1. **Enable Gzip compression** in Hostinger settings
2. **Lazy load images** using `<img loading="lazy">`
3. **Optimize images** before uploading (use ImageOptim or similar)
4. **Enable caching** headers in `.htaccess`

### Maintenance

1. **Monitor Supabase usage** - Check database size/queries
2. **Check EmailJS quota** - They provide 200 free emails/month
3. **Review admin logs** - Check for unauthorized access
4. **Update dependencies** - Run `npm update` periodically

### Future Enhancements

1. **Add a backend server** - If you need more control
2. **Use Vercel/Netlify** - Better for React apps (still free tier)
3. **Set up CI/CD pipeline** - Auto-deploy on GitHub push
4. **Add CDN** - Cache static assets globally

---

## 📞 Support Resources

- **Hostinger Support:** https://support.hostinger.com/
- **Vite Documentation:** https://vitejs.dev/
- **React Documentation:** https://react.dev/
- **Supabase Documentation:** https://supabase.com/docs
- **EmailJS Documentation:** https://www.emailjs.com/docs/

---

## 📝 Summary

Your project is ready for deployment! It's a **React SPA** that needs:

1. **Static hosting** (Hostinger) for the UI
2. **Supabase** for database (already configured)
3. **EmailJS** for email sending (already configured)
4. **Proper routing setup** (.htaccess)

The deployment is straightforward - just build, upload, and configure routing. All heavy lifting is already done! 🎉

---

**Good luck with your deployment! Your Vivekananda Global Devotees platform will be live soon.** 🙏
