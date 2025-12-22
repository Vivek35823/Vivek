# EmailJS Setup - Quick Reference Card

## 🎯 The 3 Credentials You Need

```
PUBLIC KEY:  -NpOQf59AFtneU2uu          ✅ Already set
SERVICE ID:  service_yuwcyrq             ✅ Already set  
TEMPLATE ID: template_xxxxx              ⚠️  YOU ADD THIS
```

---

## ⚡ 5-Minute Setup (If You Have Template)

1. **Get Template ID** (dashboard.emailjs.com → Email Templates → three dots → Copy)
2. **Edit .env.local** → Add: `VITE_EMAILJS_TEMPLATE_ID=template_xxxxx`
3. **Restart** → `npm run dev`
4. **Test** → Go to /contact → Fill form → Check email
5. **Done!** → Email should arrive in info@vivek-global.org

---

## 📊 Document Quick Links

| Need | Read This | Time |
|------|-----------|------|
| Choose path | EMAILJS_MASTER_GUIDE.md | 5 min |
| Fast overview | EMAILJS_QUICK_SUMMARY.md | 5 min |
| Get Template ID | EMAILJS_TEMPLATE_ID_QUICK_GUIDE.md | 2 min |
| Create template | EMAILJS_TEMPLATE_CREATION_STEPS.md | 15 min |
| Complete guide | EMAILJS_TEMPLATE_SETUP_GUIDE.md | 20 min |
| Visual diagrams | EMAILJS_SETUP_VISUAL_GUIDE.md | 10 min |
| HTML code | EMAILJS_TEMPLATE_HTML_READY.md | 5 min |
| Everything | EMAILJS_COMPLETE_INDEX.md | 15 min |

---

## 🔄 The Process Flow

```
User fills form
    ↓
Click "Send Message"
    ↓
JavaScript sends to EmailJS API
    ↓
EmailJS looks up template & service
    ↓
Renders HTML with form data
    ↓
Email provider sends email
    ↓
Email arrives in inbox ✅
    ↓
Also saves to database ✅
```

---

## ✅ Verification Checklist

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Template created with 4 variables
- [ ] Template ID copied
- [ ] .env.local updated
- [ ] Dev server restarted
- [ ] Contact form tested
- [ ] Email received
- [ ] Database saved

All checked? ✅ Done!

---

## 🐛 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| "Error sending message" | Check Template ID in .env.local |
| Email not received | Check spam folder, verify recipient |
| Variables blank | Template ID wrong, restart dev server |
| Form won't submit | Check F12 console for errors |
| Database empty | Check dbService implementation |

---

## 📧 The 4 Form Fields

| Field | Variable | Type |
|-------|----------|------|
| Name | {{from_name}} | Text |
| Email | {{from_email}} | Email |
| Subject | {{subject}} | Text |
| Message | {{message}} | Textarea |

---

## 🔑 Key Locations

```
Contact Form:     pages/Contact.tsx
Database:         services/dbService.ts
Configuration:    .env.local
Types:            types.ts
EmailJS Account:  https://dashboard.emailjs.com/
```

---

## 📝 .env.local Template

```bash
# Already Configured:
VITE_EMAILJS_PUBLIC_KEY=-NpOQf59AFtneU2uu
VITE_EMAILJS_SERVICE_ID=service_yuwcyrq

# Add This:
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
```

---

## 🎓 Learning Paths

**Fastest (15 min):**
EMAILJS_QUICK_SUMMARY.md → EMAILJS_TEMPLATE_CREATION_STEPS.md → Test

**Visual (25 min):**
EMAILJS_SETUP_VISUAL_GUIDE.md → EMAILJS_TEMPLATE_CREATION_STEPS.md → Test

**Complete (50 min):**
Read all guides in order → Create template → Customize → Test

---

## 🚀 What to Do Now

1. **Pick a guide:** Check "Document Quick Links" above
2. **Follow it:** Step-by-step instructions
3. **Copy HTML:** From EMAILJS_TEMPLATE_HTML_READY.md
4. **Get Template ID:** From EmailJS dashboard
5. **Update .env.local:** Add Template ID
6. **Test:** Go to /contact page
7. **Done!** Form is working

---

## 💾 Files Created

✅ EMAILJS_MASTER_GUIDE.md  
✅ EMAILJS_QUICK_SUMMARY.md  
✅ EMAILJS_TEMPLATE_ID_QUICK_GUIDE.md  
✅ EMAILJS_TEMPLATE_CREATION_STEPS.md  
✅ EMAILJS_TEMPLATE_SETUP_GUIDE.md  
✅ EMAILJS_SETUP_VISUAL_GUIDE.md  
✅ EMAILJS_TEMPLATE_HTML_READY.md  
✅ EMAILJS_COMPLETE_INDEX.md  
✅ EMAILJS_DOCUMENTATION_PACKAGE_SUMMARY.md  
✅ EMAILJS_PACKAGE_OVERVIEW.md  
✅ This file: EMAILJS_QUICK_REFERENCE.md

**Total: 11 comprehensive guides**

---

## 🎯 Success = 

- ✅ Contact form accessible
- ✅ Emails arrive automatically
- ✅ Professional HTML emails
- ✅ Database backup
- ✅ No errors
- ✅ Works in production

---

## ⏱️ Total Setup Time: 25-35 minutes

From zero to working contact form!

---

## 📞 Need Help?

Check the appropriate guide:
- **Quick help** → EMAILJS_QUICK_SUMMARY.md
- **Step-by-step** → EMAILJS_TEMPLATE_CREATION_STEPS.md
- **Troubleshooting** → EMAILJS_TEMPLATE_SETUP_GUIDE.md
- **Visual** → EMAILJS_SETUP_VISUAL_GUIDE.md

---

*Quick Reference Card*  
*EmailJS Setup for Vivekananda Global Devotees*  
*Keep this handy while following the guides!*
