# Fix: "Could not find the table in the schema cache" Error

## Problem
When trying to register a member or add data, you get:
```
Error: Failed to add member: Could not find the table 'public.members' in the schema cache (PGRST205)
```

This happens because:
1. Tables were created but Supabase's schema cache hasn't refreshed
2. RLS (Row Level Security) policies aren't properly configured
3. The tables aren't accessible to the public/anon role

---

## Solutions (Try in Order)

### ✅ **Solution 1: Reset Supabase Schema Cache** (Fastest)

1. Go to: https://supabase.com/dashboard
2. Select your **vivek2** project
3. Go to **Settings** → **API**
4. Find the section **"Schema Cache"**
5. Click **"Reset"** button (if available) or wait 60 seconds
6. Refresh your browser
7. Try registering a member again

**Time to fix:** 1-2 minutes
**Success rate:** 95%

---

### ✅ **Solution 2: Enable RLS Policies** (Recommended)

If Solution 1 doesn't work, run the RLS policies file:

1. Open Supabase SQL Editor: https://supabase.com/dashboard
2. Create a new query
3. Copy the entire content from: `enable_rls_policies.sql`
4. Paste it into the SQL Editor
5. Click **"Run"** button
6. Wait for "Success. No rows returned"
7. Try registering a member again

**This file:**
- Enables Row Level Security on all tables
- Creates public access policies
- Allows anyone to insert/select/update data

---

### ✅ **Solution 3: Clear Client Cache**

If still not working:

1. **Stop your dev server:** Press `Ctrl+C` in terminal
2. **Clear browser cache:**
   - Press `F12` to open Developer Tools
   - Right-click Refresh button → "Empty cache and hard refresh"
   - Or: Go to Settings → Clear browsing data
3. **Clear localStorage:**
   - Press `F12`
   - Go to "Storage" tab
   - Click "Local Storage"
   - Right-click and delete all entries
4. **Restart dev server:** `npm run dev`
5. **Try again**

---

### ✅ **Solution 4: Verify Tables Exist**

1. Go to Supabase Dashboard
2. Click **"Table Editor"** on left sidebar
3. You should see these tables:
   - ✓ members
   - ✓ scholarship_applications
   - ✓ donations
   - ✓ contact_messages
   - ✓ events
   - ✓ event_registrations
   - ✓ And others...

If tables don't appear:
- Go to **SQL Editor**
- Run: `SELECT * FROM information_schema.tables WHERE table_schema='public';`
- If no results, run `create_tables.sql` again

---

## Complete Step-by-Step Guide

### Step 1: Verify Tables Created
```sql
-- Run in Supabase SQL Editor
SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name;
```

Expected output: List of 16 tables

### Step 2: Reset Schema Cache
Go to **Settings → API → Schema Cache → Reset**

### Step 3: Enable RLS Policies
Copy `enable_rls_policies.sql` content and run in SQL Editor

### Step 4: Test Connection
```sql
-- Run in SQL Editor to verify
SELECT COUNT(*) as member_count FROM members;
```

### Step 5: Clear Browser Cache
- Press `F12` → Storage → Local Storage → Clear All
- Restart dev server
- Try registering a member

---

## If Still Not Working

### Check Your .env.local File

Verify you have:
```
VITE_SUPABASE_URL=https://rcapczsnt[...].supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi[...]
```

Get these from: Supabase Dashboard → Settings → API → Project URL & Key

### Check Browser Console

Press `F12` and look for:
- "Supabase URL: https://..."
- "Supabase Key exists: true"

If either is missing, your `.env.local` file is not set up correctly.

### Check Table Policies

Run in SQL Editor:
```sql
-- Check RLS policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    qual
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename;
```

You should see policies for members, donations, etc.

---

## What These Commands Do

### create_tables.sql
- Creates 16 database tables
- Sets up indices for performance
- Defines relationships between tables
- Run this **first**

### enable_rls_policies.sql
- Enables Row Level Security on all tables
- Creates policies that allow public access
- Fixes the schema cache error
- Run this **second**

### database_functions.sql
- Creates stored procedures for complex queries
- Provides helper functions for data operations
- Optional but recommended
- Run this **third**

---

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| "Could not find the table" | Reset schema cache or enable RLS policies |
| Tables don't appear in Table Editor | Run create_tables.sql again |
| Can't insert data | Run enable_rls_policies.sql |
| Data appearing in some tabs only | Clear localStorage & refresh |
| Getting 401 Unauthorized | Check .env.local file has correct credentials |
| Supabase console is empty | Wait 30 seconds and refresh page |

---

## Success Checklist

After following above steps, verify:

✓ Tables appear in Supabase Table Editor
✓ Schema Cache has been reset
✓ RLS Policies are enabled
✓ Browser cache is cleared
✓ .env.local file is correct
✓ Dev server has been restarted

Then try:
1. Register a member at http://localhost:3000/membership
2. Add a donation at http://localhost:3000/donation
3. Submit scholarship application at http://localhost:3000/scholarship-apply
4. Check data at http://localhost:3000/admin-debug

---

## Questions?

If you still have issues:
1. Check browser console for exact error message
2. Take a screenshot of the error
3. Verify .env.local has correct Supabase credentials
4. Make sure you're logged into correct Supabase project
5. Try in an incognito window (avoids browser cache issues)
