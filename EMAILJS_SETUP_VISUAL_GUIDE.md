# EmailJS Setup - Visual Flowchart & Diagrams

## 🔄 Complete EmailJS Setup Flow

```
START: Contact Form Submission
    ↓
User fills out form on /contact page
    ├── Name: "John Doe"
    ├── Email: "john@example.com"
    ├── Subject: "Inquiry"
    └── Message: "I have a question..."
    ↓
Submit Button Clicked
    ↓
Contact.tsx handleSubmit() function runs
    ├── Validation: Check all fields filled
    └── Create email object:
        {
          to_email: 'info@vivek-global.org',
          from_name: 'John Doe',
          from_email: 'john@example.com',
          subject: 'Inquiry',
          message: 'I have a question...',
          reply_to: 'john@example.com'
        }
    ↓
emailjs.send() is called with:
    ├── Service ID: service_yuwcyrq (WHO)
    ├── Template ID: template_xxxxx (WHAT)
    └── Email data (DATA)
    ↓
EmailJS API processes request
    ↓
Email Template is rendered
    ├── Subject: "New Contact Form Submission from John Doe"
    └── Body: HTML template with all 4 variables filled
        {{from_name}} → "John Doe"
        {{from_email}} → "john@example.com"
        {{subject}} → "Inquiry"
        {{message}} → "I have a question..."
    ↓
Gmail/Outlook service sends email
    ↓
Email arrives in info@vivek-global.org inbox
    ↓
Also saved to database (dbService.addMessage)
    ↓
User sees "Message Sent!" success message
    ↓
COMPLETE
```

---

## 📊 Configuration Components Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                   EMAILJS CONFIGURATION                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  .env.local                                                       │
│  ────────────────────────────────────────────────────────────   │
│  ✅ VITE_EMAILJS_PUBLIC_KEY: -NpOQf59AFtneU2uu                  │
│     └─→ Frontend authentication                                  │
│     └─→ Can be public (in browser)                              │
│     └─→ Already configured                                       │
│                                                                   │
│  ✅ VITE_EMAILJS_SERVICE_ID: service_yuwcyrq                    │
│     └─→ Which email service to use                              │
│     └─→ Could be Gmail, Outlook, etc.                           │
│     └─→ Already configured                                       │
│                                                                   │
│  ⚠️  VITE_EMAILJS_TEMPLATE_ID: [FIND THIS]                      │
│     └─→ Which email template to use                             │
│     └─→ This is what you need to find                           │
│     └─→ Format: template_xxxxx                                   │
│     └─→ Step: Create template, copy ID, paste here             │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Template Variable Mapping

```
FORM DATA (from user)          →    EMAIL TEMPLATE VARIABLES
├─ formData.name               →    {{from_name}}
├─ formData.email              →    {{from_email}}
├─ formData.subject            →    {{subject}}
└─ formData.message            →    {{message}}

EXAMPLE:
┌──────────────────────────────┐  ┌──────────────────────────────┐
│ Form Input                   │  │ Email Output                 │
├──────────────────────────────┤  ├──────────────────────────────┤
│ Name: Alice Johnson          │→ │ From: Alice Johnson          │
│ Email: alice@email.com       │→ │ To: alice@email.com          │
│ Subject: Scholarship Question│→ │ Subject: Scholarship Question│
│ Message: How do I apply?     │→ │ Message: How do I apply?     │
└──────────────────────────────┘  └──────────────────────────────┘
```

---

## 🔐 Authentication Hierarchy

```
EmailJS Security Chain
═══════════════════════════════════════════════════

Level 1: Public Key (Frontend)
├─ Location: Browser, GitHub, anywhere
├─ Purpose: Authenticate frontend
├─ Current Value: -NpOQf59AFtneU2uu
├─ Risk: Low (frontend only)
└─ Status: ✅ Configured

Level 2: Service ID (Email Provider)
├─ Location: .env.local (private)
├─ Purpose: Select which email service
├─ Current Value: service_yuwcyrq
├─ Risk: Medium (identifies service)
└─ Status: ✅ Configured

Level 3: Template ID (Email Template)
├─ Location: .env.local (private)
├─ Purpose: Select which template
├─ Current Value: [NOT YET - FIND THIS]
├─ Risk: Low (template preview is safe)
└─ Status: ⚠️  Needs Configuration

Level 4: Email Service Credentials
├─ Location: EmailJS Dashboard
├─ Purpose: Access Gmail/Outlook account
├─ Status: ✅ Already connected
└─ Used by: EmailJS internally
```

---

## 📍 Dashboard Navigation Map

```
EmailJS Dashboard (https://dashboard.emailjs.com/)
│
├─ 🏠 Dashboard (home)
│
├─ ⚙️  Settings
│  └─ Account settings, theme, etc.
│
├─ 📧 Services ✅ (Already Connected)
│  ├─ service_yuwcyrq (Gmail)
│  └─ Shows connected email providers
│
├─ 📝 Email Templates ← YOU ARE HERE
│  ├─ List of all templates
│  ├─ [Create New Template] button
│  └─ Your template: "Contact Form - Vivek Global Devotees"
│     └─ Click three dots ⋮
│        └─ Copy Template ID ← GET YOUR ID HERE
│
├─ 🔌 Integrations
│  └─ Connect to platforms, webhooks, etc.
│
└─ 📊 Usage & Billing
   └─ Email quota, payment info
```

---

## 🚀 Implementation Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      USER BROWSER                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Contact.tsx Component                                            │
│  └─ Form inputs: name, email, subject, message                  │
│  └─ handleSubmit() triggered on "Send Message" click            │
│                                                                   │
│  emailjs.send({                                                   │
│    service_id: "service_yuwcyrq",    ← From .env.local         │
│    template_id: "template_xxxxx",    ← From .env.local         │
│    user_id: "-NpOQf59AF...",         ← From .env.local         │
│    template_params: {                                            │
│      from_name: "John Doe",                                      │
│      from_email: "john@email.com",                               │
│      subject: "Inquiry",                                         │
│      message: "...",                                             │
│      reply_to: "john@email.com"                                  │
│    }                                                              │
│  })                                                               │
│                                                                   │
│  Also: dbService.addMessage(formData) ← Database backup         │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                            ↓ HTTPS Request
┌─────────────────────────────────────────────────────────────────┐
│                    EMAILJS.COM API                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  1. Verify credentials                                            │
│  2. Find template by ID: template_xxxxx                          │
│  3. Find service by ID: service_yuwcyrq                          │
│  4. Replace variables in template HTML                           │
│  5. Compile final email                                          │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                            ↓ Email submission
┌─────────────────────────────────────────────────────────────────┐
│                 EMAIL SERVICE PROVIDER                           │
│         (Gmail/Outlook - Configured in EmailJS)                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Authenticate with Gmail/Outlook account                         │
│  Send email to: info@vivek-global.org                           │
│  From: noreply@emailjs.com                                       │
│  Reply-To: john@email.com                                        │
│  Subject: New Contact Form Submission from John Doe             │
│  Body: [Rendered HTML template with variables filled]           │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                            ↓ Email sent
┌─────────────────────────────────────────────────────────────────┐
│                  RECIPIENT INBOX                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  To: info@vivek-global.org                                       │
│  Subject: New Contact Form Submission from John Doe             │
│  [Beautiful HTML email with all form details]                   │
│  Reply-To: john@email.com                                        │
│                                                                   │
│  User sees success message:                                      │
│  "Message Sent! Thank you for reaching out."                    │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔍 Finding Template ID - Step by Step

```
Step 1: Dashboard
┌────────────────────┐
│  EmailJS Dashboard │
│  dashboard.emailjs │
│      .com/         │
└────────────────────┘
        ↓
Step 2: Click Menu
┌────────────────────────────────────────────┐
│  Left Sidebar                              │
│  ├─ Settings                               │
│  ├─ Services                               │
│  ├─ Email Templates  ← CLICK HERE          │
│  ├─ Integrations                           │
│  └─ Usage & Billing                        │
└────────────────────────────────────────────┘
        ↓
Step 3: Find Template
┌────────────────────────────────────────────┐
│  Email Templates List                      │
│                                            │
│  ✓ Contact Form - Vivek Global    [⋮]     │
│    Devotees                                │
│                                            │
│  [Create New Template] button              │
└────────────────────────────────────────────┘
        ↓
Step 4: Click Menu
┌────────────────────────────────────────────┐
│  Click three dots [⋮]                      │
│                                            │
│  Menu appears:                             │
│  ├─ Edit                                   │
│  ├─ Copy Template ID   ← CLICK HERE        │
│  ├─ Delete                                 │
│  └─ ... More options                       │
└────────────────────────────────────────────┘
        ↓
Step 5: Copy ID
┌────────────────────────────────────────────┐
│  Template ID copied to clipboard!          │
│  (You'll see a notification)               │
│                                            │
│  Example: template_abc12345def6            │
└────────────────────────────────────────────┘
        ↓
Step 6: Paste in .env.local
┌────────────────────────────────────────────┐
│  .env.local file                           │
│                                            │
│  VITE_EMAILJS_TEMPLATE_ID=\                │
│    template_abc12345def6                   │
└────────────────────────────────────────────┘
```

---

## 📧 Email Template Structure

```
┌──────────────────────────────────────────────────────────┐
│                     EMAIL TEMPLATE                        │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  Template Name:                                           │
│  Contact Form - Vivek Global Devotees                    │
│                                                           │
│  Service:                                                 │
│  service_yuwcyrq (Gmail)                                 │
│                                                           │
│  Subject Line:                                            │
│  New Contact Form Submission from {{from_name}}          │
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │ Email Body (HTML)                                 │   │
│  │                                                   │   │
│  │ [Header with gradient background]                │   │
│  │ 🌟 New Contact Form Submission                   │   │
│  │    Vivekananda Global Devotees                   │   │
│  │                                                   │   │
│  │ [Content Section]                                │   │
│  │ Sender Name: {{from_name}}                       │   │
│  │ Email: {{from_email}}                            │   │
│  │ Subject: {{subject}}                             │   │
│  │ Message: {{message}}                             │   │
│  │                                                   │   │
│  │ [Reply Info]                                      │   │
│  │ Reply directly to {{from_email}}                  │   │
│  │                                                   │   │
│  │ [Footer]                                          │   │
│  │ © 2025 Vivekananda Global Devotees              │   │
│  │                                                   │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

---

## ✅ Verification Flowchart

```
Setup Complete?
│
├─ [A] EmailJS account created
│  ├─ YES ✓ → Next step
│  └─ NO ✗ → Sign up at emailjs.com
│
├─ [B] Service connected
│  ├─ YES ✓ → Next step
│  └─ NO ✗ → Connect Gmail/Outlook
│
├─ [C] .env.local has credentials
│  ├─ VITE_EMAILJS_PUBLIC_KEY ✓
│  ├─ VITE_EMAILJS_SERVICE_ID ✓
│  ├─ VITE_EMAILJS_TEMPLATE_ID ?
│  │  ├─ YES ✓ → Next step
│  │  └─ NO ✗ → Find Template ID (this guide)
│
├─ [D] Template created
│  ├─ YES ✓ → Next step
│  └─ NO ✗ → Create from EMAILJS_TEMPLATE_CREATION_STEPS.md
│
├─ [E] Template ID in .env.local
│  ├─ YES ✓ → Next step
│  └─ NO ✗ → Copy Template ID and update .env.local
│
├─ [F] Dev server restarted
│  ├─ YES ✓ → Next step
│  └─ NO ✗ → npm run dev
│
├─ [G] Form tested
│  ├─ YES ✓ → Ready to use
│  └─ NO ✗ → Go to /contact and test
│
└─ SUCCESS ✅ Contact form fully functional
```

---

## 🐛 Error Diagnosis Tree

```
Contact Form Error?
│
├─ See "Error sending message"
│  │
│  ├─ Check .env.local has Template ID
│  │  ├─ Missing → Copy from EmailJS dashboard
│  │  └─ Wrong format → Should be: template_xxxxx
│  │
│  ├─ Restart dev server
│  │  └─ npm run dev
│  │
│  └─ Check browser console (F12)
│     └─ Look for detailed error message
│
├─ Email not received
│  │
│  ├─ Check spam/junk folder
│  │
│  ├─ Verify recipient email
│  │  └─ Should go to: info@vivek-global.org
│  │
│  ├─ Check EmailJS dashboard
│  │  └─ See failed email logs
│  │
│  └─ Check template variables
│     └─ {{from_name}}, {{from_email}}, etc.
│
├─ Template variables show as blank
│  │
│  ├─ Check variable names in template
│  │  └─ Must be: from_name, from_email, subject, message
│  │
│  └─ Check Contact.tsx is sending correct field names
│     └─ Line 109-116 in Contact.tsx
│
└─ Solved? If no, see TROUBLESHOOTING section
```

---

## 🎯 Quick Decision Tree: What You Need

```
Do I have a Template ID?
│
├─ YES, I have it → Jump to "Update .env.local" section
│
└─ NO, I need to find it
   │
   ├─ Do I have an EmailJS template created?
   │  │
   │  ├─ YES → Use EMAILJS_TEMPLATE_ID_QUICK_GUIDE.md
   │  │       (Quick steps to copy ID)
   │  │
   │  └─ NO → Use EMAILJS_TEMPLATE_CREATION_STEPS.md
   │          (Create template first, then copy ID)
   │
   └─ Got your ID? → Update .env.local and restart dev server
```

---

## 📞 Contact Form Data Flow

```
USER
  ↓
[Contact Form Page]
  Name: John
  Email: john@email.com
  Subject: Question
  Message: How to apply?
  ↓
[Click "Send Message"]
  ↓
Contact.tsx handleSubmit()
  ├─ Validate form data
  ├─ Create email object
  └─ Call: emailjs.send()
     AND: dbService.addMessage()
  ↓
[EmailJS API]
  ├─ Lookup Service: service_yuwcyrq
  ├─ Lookup Template: template_xxxxx
  ├─ Replace variables
  └─ Render email HTML
  ↓
[Email Provider - Gmail/Outlook]
  ├─ Connect to account
  ├─ Send email
  └─ Return success/failure
  ↓
[Database]
  ├─ Save message to contact_messages table
  └─ Record saved
  ↓
[User Browser]
  └─ Show success message: "Message Sent!"
  ↓
[Recipient]
  └─ Email arrives in info@vivek-global.org
```

---

## Summary of Files

| File | Purpose |
|------|---------|
| **EMAILJS_TEMPLATE_SETUP_GUIDE.md** | Complete setup documentation |
| **EMAILJS_TEMPLATE_ID_QUICK_GUIDE.md** | Quick reference for finding Template ID |
| **EMAILJS_TEMPLATE_CREATION_STEPS.md** | Step-by-step template creation |
| **EMAILJS_SETUP_VISUAL_GUIDE.md** (this file) | Diagrams and visual flowcharts |
| **.env.local** | Configuration file with credentials |
| **Contact.tsx** | React component for contact form |

---

## Next Steps

1. ✅ Understand the flow (this file)
2. ✅ Create template (EMAILJS_TEMPLATE_CREATION_STEPS.md)
3. ✅ Find Template ID (EMAILJS_TEMPLATE_ID_QUICK_GUIDE.md)
4. ✅ Update .env.local
5. ✅ Restart dev server
6. ✅ Test form (Contact page)
