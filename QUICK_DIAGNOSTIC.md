# ✅ Data Not Showing - Quick Fix Guide

Your `.env.local` is configured correctly! ✅

The issue is likely one of these:

---

## 🔍 Check #1: Does Data Actually Exist in Database?

### Go to Supabase Dashboard:
1. Open: https://supabase.com/dashboard
2. Select project: **vivek2**
3. Click: **Table Editor** (left sidebar)
4. Click: **scholarship_applications** table
5. **Look for rows with data**

**Result:**
- ✅ **If you see rows** → Data exists, issue is with how we're fetching/displaying it
- ❌ **If table is empty** → You need to submit scholarship applications first

---

## 🔍 Check #2: Can We See Data in Admin Debug Page?

### Go to Admin Debug:
1. Open: http://localhost:3000/admin-debug
2. Scroll to **"Scholarship Applications"** section
3. **Look for JSON data**

**Result:**
- ✅ **If you see data** → Supabase connection works! Issue is modal display
- ❌ **If it's blank/empty** → Data isn't in Supabase yet

---

## 📝 Check #3: Submit Test Data First

If database is empty, let's add test data:

1. **Go to:** http://localhost:3000/scholarship-apply
2. **Fill the form:**
   - Scholarship Type: Merit-Based ✓
   - Full Name: Test User ✓
   - Email: test@example.com ✓
   - Phone: +1234567890 ✓
   - Academic %: 85 ✓
   - Family Income: 50000 ✓
   - Other fields: Leave blank (optional)
3. **Click: "Submit Application"**
4. **Should see: ✅ "Success" message**

---

## 🔍 Check #4: Verify Data Was Saved

After submitting test data:

1. **Go to:** http://localhost:3000/admin-debug
2. **Scroll down** to "Scholarship Applications"
3. **Should now see:** Your JSON data

If you don't see it:
- Wait 2-3 seconds
- Press F5 to refresh
- Check browser console (F12) for errors

---

## 🔍 Check #5: Check Admin Panel Modal

With data now in the database:

1. **Go to:** http://localhost:3000/admin-panel
2. **Password:** admin123
3. **Click:** "Applications" tab
4. **Look for applicant card** that says "Test User"
5. **Click on the name "Test User"**
6. **Modal should open** with full details

**If modal is still blank:**
1. Press F12 to open Developer Tools
2. Go to **Console** tab
3. Look for log messages like:
   - "Loading admin data..."
   - "Applications data: [...]"
   - "Mapped applications: [...]"
4. If you see the data in logs but not in modal, it's a UI rendering issue

---

## 🛠️ If Data Shows in Console But Not in Modal

This means the data is being fetched correctly but the modal isn't displaying it properly.

**Solution:**
1. **Close the modal** (click X button)
2. **Wait 2 seconds**
3. **Click on applicant name again** to reopen
4. **Check if data appears**

If still blank:
1. **Check browser console for errors:**
   ```
   F12 → Console tab
   Look for red error messages
   ```
2. **Create a screenshot** of:
   - The blank modal
   - The browser console errors
3. The data structure might have changed

---

## 📋 Complete Checklist

Use this to systematically debug:

- [ ] `.env.local` has VITE_SUPABASE_URL ✓ (Already checked - YES)
- [ ] `.env.local` has VITE_SUPABASE_ANON_KEY ✓ (Already checked - YES)
- [ ] Open Supabase dashboard → Table Editor
- [ ] scholarship_applications table has data (if empty, submit test form first)
- [ ] Go to /admin-debug and see data there
- [ ] Go to /admin-panel → Applications tab
- [ ] See applicant card in list
- [ ] Click on applicant name
- [ ] Modal opens
- [ ] Check browser console (F12 → Console)
- [ ] No red error messages

---

## 🎯 Most Common Issues & Fixes

### Issue: "Modal opens but shows blank/empty data"
**Solution:**
- Browser cache issue
- Press F12 → Storage → Local Storage → Clear All
- Refresh the page
- Try again

### Issue: "Data shows in /admin-debug but not in /admin-panel modal"
**Solution:**
- The modal's state might not be updating
- Close modal and reopen it
- Or restart dev server

### Issue: "Scholar applications tab shows 0 applications"
**Solution:**
- No data submitted yet
- Go to /scholarship-apply
- Submit a test form
- Data should appear after submission

### Issue: "Getting error in browser console"
**Solution:**
- Take screenshot of the error
- Check the error message
- Most common: "Cannot read property X of undefined"
- This means data structure doesn't match types

---

## 🔧 Advanced: Check Raw Data Structure

If modal is blank, check what structure Supabase is returning:

1. Open browser console: F12
2. After applicant modal opens, paste this:
   ```javascript
   // This will show in the console
   const app = document.querySelector('[data-application-id]');
   console.log(app);
   ```

Or check the network requests:
1. Open F12 → Network tab
2. Reload page
3. Look for request to `/schema` or `/applications`
4. Click on it and check response

---

## 📞 Still Need Help?

Follow these steps in order:
1. Submit test scholarship application (see "Submit Test Data" above)
2. Check /admin-debug shows the data
3. Open F12 developer tools
4. Go to Admin Panel → Applications
5. Click on applicant name
6. Check Console tab for any error messages
7. Take screenshot of error if present

Once data shows in /admin-debug, we know Supabase works.
If it's blank in modal but shows in debug, it's a UI issue to fix.
