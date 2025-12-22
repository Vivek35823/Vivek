# Why Scholarship Application Data is Not Showing

## Quick Diagnosis

### Step 1: Check if Supabase is Configured
Open your browser console (F12) and check:

```javascript
// The VITE_SUPABASE_URL should show your Supabase project URL
console.log('URL:', import.meta.env.VITE_SUPABASE_URL);

// This should show 'true' if configured
console.log('Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
```

**If you see "undefined" for both:**
- Your `.env.local` file is NOT set up correctly
- Go to Step 2 below

**If you see a URL and true:**
- Supabase is configured
- Go to Step 3 below

---

## Step 2: Fix .env.local File

Your `.env.local` file is missing or incomplete.

### How to Set It Up:

1. **Go to Supabase Dashboard:** https://supabase.com/dashboard
2. **Select project:** vivek2
3. **Go to Settings → API**
4. **Copy these values:**
   - Project URL → copy this
   - Anon public key → copy this

5. **Create or edit `.env.local` file** in your project root:
   ```
   VITE_SUPABASE_URL=https://rcapczsnt[...].supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOi[...]
   ```

6. **Save the file**

7. **IMPORTANT: Stop and restart your dev server:**
   ```bash
   npm run dev
   ```

8. **Clear browser cache:**
   - Press F12
   - Storage → Local Storage → Clear All
   - Refresh page

9. **Try again**

---

## Step 3: Verify Database Has Data

If Supabase is configured, check if the database actually has scholarship applications:

### Method 1: Check Supabase Dashboard
1. Go to https://supabase.com/dashboard
2. Click **Table Editor**
3. Click **scholarship_applications** table
4. You should see rows with your data

**If table is empty:**
- You haven't submitted any scholarship applications yet
- Go to http://localhost:3000/scholarship-apply
- Fill in and submit the form
- Data should appear in the table

### Method 2: Check in Browser Console
```javascript
// Open browser console (F12)

// Check what's in localStorage
console.log('Local storage data:');
console.log(JSON.parse(localStorage.getItem('vivek_scholarships') || '[]'));

// This will show if you're using localStorage fallback instead of Supabase
```

---

## Step 4: Test the Full Flow

### If Using Supabase (with .env.local configured):

1. **Open:** http://localhost:3000/scholarship-apply
2. **Fill form with test data:**
   - Scholarship Type: Merit-Based
   - Full Name: Test User
   - Email: test@example.com
   - Phone: +1234567890
   - Academic %: 85
   - Income: 50000
   - Other fields: Optional
3. **Click Submit**
4. **Go to:** http://localhost:3000/admin-debug
5. **Scroll to "Scholarship Applications"**
6. **You should see your data in JSON format**

### If Still Not Showing in Admin Panel:

1. **Go to Admin Panel:** http://localhost:3000/admin-panel
2. **Enter password:** admin123
3. **Click Applications tab**
4. **Click "Refresh Data" button**
5. **Check browser console (F12 → Console)**
6. **Look for these log messages:**
   - "Loading admin data..."
   - "Applications data: [...]"
   - If you see your data here, but it's not displaying, it's a UI issue

---

## Common Issues & Solutions

### Issue 1: "Not showing any data even after submitting"

**Cause:** Supabase is not configured

**Fix:**
1. Check your `.env.local` file exists
2. Verify it has VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
3. Restart dev server: `npm run dev`
4. Clear browser cache (F12 → Storage → Clear All)
5. Try submitting again

---

### Issue 2: "Data shows in /admin-debug but not in Admin Panel modal"

**Cause:** Data is not being mapped correctly in the modal

**Fix:**
1. Close the modal
2. Open browser console (F12)
3. Look for "Mapped applications:" log
4. Check if all fields are showing or if they're blank

---

### Issue 3: "Getting 'Cannot read property' errors in console"

**Cause:** Data structure mismatch

**Fix:**
1. Go to `/admin-debug` page
2. Look at the raw data JSON
3. Compare field names with your TypeScript types
4. All snake_case fields should be converted to camelCase

---

## File Locations to Check

```
Project Root/
├── .env.local                          ← MUST have these keys!
├── services/
│   ├── supabaseClient.ts              ← Uses env variables
│   └── dbService.ts                   ← Has data mapping
├── pages/
│   ├── AdminPanel.tsx                 ← Shows in modal
│   ├── AdminDebug.tsx                 ← Shows raw data
│   └── ScholarshipApplication.tsx     ← Submits form
└── types.ts                            ← Type definitions
```

---

## Quick Checklist

- [ ] `.env.local` file exists in project root
- [ ] `.env.local` has VITE_SUPABASE_URL
- [ ] `.env.local` has VITE_SUPABASE_ANON_KEY
- [ ] Dev server restarted after adding .env.local
- [ ] Browser cache cleared (F12 → Storage → Clear All)
- [ ] Submitted at least one scholarship application
- [ ] Data shows in `/admin-debug` page
- [ ] Checked browser console for errors
- [ ] Tried clicking "Refresh Data" button in Admin Panel

---

## Step-by-Step Verification

### 1. Verify .env.local Setup
```bash
# In project root, check if file exists
# On Windows/PowerShell:
Get-Content .env.local

# On Mac/Linux:
cat .env.local
```

Should show:
```
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_ANON_KEY=eyJ...
```

### 2. Verify Supabase Tables Have Data
Go to: https://supabase.com/dashboard
→ Select vivek2 project
→ Table Editor
→ scholarship_applications
→ Should show rows

### 3. Verify Admin Panel Can Read Data
1. Go to http://localhost:3000/admin-debug
2. Scroll down to "Scholarship Applications"
3. Should see JSON data

### 4. Verify Admin Panel Modal
1. Go to http://localhost:3000/admin-panel
2. Password: admin123
3. Click Applications tab
4. Click on applicant name
5. Should see full details modal

---

## Still Not Working?

Take these steps:

1. **Screenshot the browser console error** (F12 → Console)
2. **Check Admin Debug page** (/admin-debug) - does data show there?
3. **Check Supabase dashboard** - Table Editor - does data exist there?
4. **Verify .env.local file** - does it have correct values?
5. **Restart everything:**
   ```bash
   # Kill dev server (Ctrl+C)
   # Clear browser cache (F12 → Storage → Clear All)
   # npm run dev
   # Refresh page
   ```

If you've done all this and still have issues, check:
- Browser console for exact error message
- Network tab (F12 → Network) - any failed requests?
- Supabase logs at dashboard
