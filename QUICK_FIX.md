# Quick Fix Card: Schema Cache Error

## Error You're Getting
```
Could not find the table 'public.members' in the schema cache (PGRST205)
```

## What to Do (In Order)

### 1️⃣ Reset Schema Cache (30 seconds)
- Go to: https://supabase.com/dashboard
- Select project: **vivek2**
- Go to: **Settings → API**
- Click: **Reset** under "Schema Cache"
- Wait 60 seconds
- Try again ✅

### 2️⃣ If That Doesn't Work: Enable RLS (2 minutes)
- Open Supabase SQL Editor
- Copy content from: `enable_rls_policies.sql`
- Paste & click **Run**
- Try again ✅

### 3️⃣ If Still Not Working: Clear Everything
```bash
# Terminal
npm run dev
```
Then:
- Press F12 (DevTools)
- Go to Storage → Local Storage → Clear All
- Close DevTools
- Refresh page
- Try again ✅

### 4️⃣ Verify Your Setup
Check you have `.env.local` file with:
```
VITE_SUPABASE_URL=https://rcapczsnt....supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
```

---

## Test If It Works

1. Go to: http://localhost:3000/membership
2. Fill in form:
   - Full Name: John Doe
   - Email: john@example.com
   - Country: United States
   - Occupation: Engineer
3. Click Submit
4. Should see ✅ Success message

If you see success → **All tables are working!**

---

## Files to Run in Supabase

Run in order:

| # | File | Purpose | Status |
|---|------|---------|--------|
| 1 | `create_tables.sql` | Create all tables | ✅ Already done |
| 2 | `enable_rls_policies.sql` | Enable public access | 👈 Do this next |
| 3 | `database_functions.sql` | Create functions | Optional |

---

## Still Having Issues?

Check browser console (F12 → Console):
- Look for red errors
- Take screenshot
- Search error message in `FIX_SCHEMA_CACHE_ERROR.md`

Most common:
- ❌ "Could not find table" → Reset cache
- ❌ "Permission denied" → Run RLS file
- ❌ "Credentials not found" → Fix .env.local

---

## Contact Reference

Supabase Dashboard: https://supabase.com/dashboard
SQL Editor: https://supabase.com/dashboard/project/[your-project-id]/sql
