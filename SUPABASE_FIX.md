# Supabase Data Storage Fix - Step by Step

## Problem
Your application is using localStorage instead of Supabase because environment variables aren't configured in Vercel.

## Solution: Add Environment Variables to Vercel

### Step 1: Go to Vercel Dashboard
1. Visit https://vercel.com/vivek35823
2. Click on your **Vivek** project
3. Go to **Settings** tab

### Step 2: Add Environment Variables
1. Click on **Environment Variables** (left sidebar)
2. Add these three variables:

```
VITE_SUPABASE_URL = https://rcapczsnthqgtagwxgyj.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjYXBjenNudGhxZ3RhZ3d4Z3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0MTIxODIsImV4cCI6MjA4MTk4ODE4Mn0.2a8mZFhAJAOGTwCeHNnalVKeV4eeO7_9RGSNK47eGcU
VITE_EMAILJS_PUBLIC_KEY = -NpOQf59AFtneU2uu
```

### Step 3: Save and Redeploy
1. After adding variables, Vercel will automatically ask to redeploy
2. Click **Redeploy**
3. Wait 2-3 minutes for deployment to complete

### Step 4: Verify
1. Visit your deployed site: https://thevivekfoundation.org
2. Try to register as a member
3. Check Supabase dashboard to confirm data is saved
4. Data should appear in your `members` table

## Expected Tables in Supabase

Make sure these tables exist in your Supabase project:
- `members` (for membership registrations)
- `scholarships` (for scholarship applications)
- `donations` (for donations)
- `messages` (for contact messages)

If tables don't exist, create them with this structure:

### members table
```
- id (uuid, primary key)
- full_name (text)
- email (text)
- country (text)
- occupation (text)
- created_at (timestamp)
```

### scholarships table
```
- id (uuid, primary key)
- scholarship_type (text)
- applicant_name (text)
- email (text)
- phone_number (text)
- ... (all other scholarship fields)
- applied_at (timestamp)
- status (text, default: 'pending')
```

### donations table
```
- id (uuid, primary key)
- donor_name (text)
- email (text)
- amount (numeric)
- currency (text)
- message (text)
- created_at (timestamp)
```

### messages table
```
- id (uuid, primary key)
- name (text)
- email (text)
- message (text)
- created_at (timestamp)
```

## Troubleshooting

### Check if variables are loaded:
1. Open browser DevTools (F12)
2. Go to Console tab
3. You should see: "Supabase URL: https://rcapczsnthqgtagwxgyj.supabase.co"
4. And: "Supabase Key exists: true"

If not, environment variables aren't set in Vercel.

### Check Supabase Permissions:
1. Go to Supabase dashboard
2. Go to **Authentication → Policies**
3. Make sure anonymous users can insert data:
   - Table: `members`
   - Policy: Anyone can insert
   - Policy: Anyone can read own row

### Still Not Working?
Check the browser console for specific error messages and share them.
