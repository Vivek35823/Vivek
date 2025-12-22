# Quick Guide: Finding Your EmailJS Template ID

## ⚡ 30-Second Method

1. Go to https://dashboard.emailjs.com/
2. Click **"Email Templates"** in the left menu
3. Find your template: **"Contact Form - Vivek Global Devotees"**
4. Click the **three dots (⋮)** next to the template name
5. Click **"Copy Template ID"**
6. Paste it in your `.env.local` file

---

## 📍 Visual Walkthrough

### Step 1: Open EmailJS Dashboard
```
https://dashboard.emailjs.com/
         ↓
    Log in with your account
```

### Step 2: Navigate to Templates
```
Left Sidebar
    ↓
Click "Email Templates"
    ↓
Shows list of your templates
```

### Step 3: Locate Your Contact Form Template
```
Look for: "Contact Form - Vivek Global Devotees"
           (or whatever name you gave it)
```

### Step 4: Copy Template ID

**Method A - Via Menu (Easiest):**
```
Your template row
    ↓
Click three dots (⋮) on the right
    ↓
Select "Copy Template ID"
    ↓
ID is now in your clipboard
```

**Method B - Via URL:**
```
Click on template name
    ↓
Look at browser URL:
   dashboard.emailjs.com/admin/templates/[TEMPLATE_ID]
    ↓
Copy the [TEMPLATE_ID] part
    ↓
Example: template_abc12345def6
```

---

## 🔧 Update Your .env.local

Once you have your Template ID:

**Before:**
```bash
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
```

**After:**
```bash
VITE_EMAILJS_TEMPLATE_ID=template_abc12345def6
```

Replace `template_abc12345def6` with your actual ID.

---

## ✅ Verification Checklist

After updating `.env.local`:

- [ ] Template ID starts with `template_`
- [ ] No extra spaces before or after
- [ ] No quotes around the value
- [ ] File is saved
- [ ] Development server restarted (`npm run dev`)

---

## 📧 What the Template ID Looks Like

| Example | Format | Status |
|---------|--------|--------|
| `template_abc123def456` | ✅ Correct | Ready to use |
| `service_abc123def456` | ❌ Wrong | This is a Service ID, not Template ID |
| `your_emailjs_template_id_here` | ❌ Wrong | This is placeholder text |
| `template_` (with nothing after) | ❌ Wrong | Incomplete |

---

## 🐛 If You Can't Find It

### Problem: No templates showing in Email Templates section

**Solution:**
1. Click **"Create New Template"** button
2. Choose your service from the dropdown
3. Create a new template with this content:

#### Template Details:
- **Name:** Contact Form - Vivek Global Devotees
- **Subject:** New Contact Form Submission from {{from_name}}
- **HTML Content:** (see EMAILJS_TEMPLATE_SETUP_GUIDE.md for full template)

### Problem: You created multiple templates by mistake

**Solution:**
1. In Email Templates list, find the correct one
2. To delete unwanted templates, click three dots (⋮) → Delete
3. Keep only: "Contact Form - Vivek Global Devotees"

---

## 🔗 Quick Links

| Resource | URL |
|----------|-----|
| EmailJS Dashboard | https://dashboard.emailjs.com/ |
| Email Templates | https://dashboard.emailjs.com/#/templates |
| Full Setup Guide | See EMAILJS_TEMPLATE_SETUP_GUIDE.md |
| Contact Form Code | pages/Contact.tsx |

---

## 💡 Pro Tips

1. **Can't remember your Template ID?**
   - Go to dashboard.emailjs.com
   - Click Email Templates
   - Use Ctrl+F to search your template name
   - Copy it again using three dots menu

2. **Multiple services/templates?**
   - Keep track of which template goes with which service
   - Service ID: `service_yuwcyrq` → This is already configured
   - Template ID: Find this and add to `.env.local`

3. **Testing after update?**
   - Go to /contact page
   - Fill in the form
   - Click "Send Message"
   - Should see "Message Sent!" message
   - Check your email for the received message

---

## 🚨 Common Mistakes to Avoid

❌ **Mistake 1:** Using Service ID instead of Template ID
- Service ID = `service_xxxxx` (already configured)
- Template ID = `template_xxxxx` (what you need to find)

❌ **Mistake 2:** Copying wrong ID from URL
- Template page URL: `dashboard.emailjs.com/admin/templates/[TEMPLATE_ID]`
- Only copy what's after `/templates/`

❌ **Mistake 3:** Forgetting to restart dev server
- After updating `.env.local`, always restart:
  ```bash
  # Press Ctrl+C to stop
  npm run dev
  ```

❌ **Mistake 4:** Extra spaces in `.env.local`
```bash
# ❌ Wrong
VITE_EMAILJS_TEMPLATE_ID = template_abc123

# ✅ Correct
VITE_EMAILJS_TEMPLATE_ID=template_abc123
```

---

## Next Steps

1. ✅ Find your Template ID (using this guide)
2. ✅ Update `.env.local`
3. ✅ Restart dev server
4. ✅ Test contact form at /contact
5. ✅ Verify email arrives

**Questions?** See EMAILJS_TEMPLATE_SETUP_GUIDE.md for full documentation.
