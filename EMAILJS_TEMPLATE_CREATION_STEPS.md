# EmailJS Template Creation Step-by-Step Guide

## Complete Walkthrough with Screenshots Description

This guide provides detailed instructions for creating an EmailJS template for your contact form, designed specifically for the **Vivekananda Global Devotees** platform.

---

## Prerequisites

✅ EmailJS account created  
✅ Email service connected (Gmail, Outlook, or similar)  
✅ Logged into https://dashboard.emailjs.com/  

---

## Phase 1: Navigate to Email Templates

### Step 1.1: Open EmailJS Dashboard

1. Go to https://dashboard.emailjs.com/
2. Log in with your credentials
3. You'll see a dashboard with several sections on the left

### Step 1.2: Access Email Templates

In the left navigation menu:

```
Dashboard
  ├── Settings
  ├── Services          ← Email service (already configured)
  ├── Email Templates   ← Click here
  ├── Integrations
  └── Usage & Billing
```

**Click on "Email Templates"**

You should see:
- A list of existing templates (if any)
- A button labeled **"Create New Template"**

---

## Phase 2: Create New Template

### Step 2.1: Click "Create New Template"

Button location: Top-right corner of the Email Templates page

### Step 2.2: Choose Your Service

A dialog appears asking:
```
"Select Service for New Template"

[Dropdown showing:]
- service_yuwcyrq (Gmail)  ← Select this
- Any other services you've created
```

**Select:** `service_yuwcyrq` (or your configured service)

Click **"Create"** button

---

## Phase 3: Configure Template Details

After creating the template, you'll see the template editor with sections:

### Section 1: Template Information

**Template Name** field:
```
Enter: Contact Form - Vivek Global Devotees
```

This is what you'll see in your templates list.

### Section 2: Email Template

This is where you configure what the email will look like.

---

## Phase 4: Configure Email Subject

### Step 4.1: Template Subject Field

Find the **"Subject"** section (usually below template name)

**Enter:**
```
New Contact Form Submission from {{from_name}}
```

**What this means:**
- `{{from_name}}` = Sender's name from the form
- When email is sent, it will show the actual name

**Example:**
If someone named "John Doe" submits:
```
Subject: New Contact Form Submission from John Doe
```

---

## Phase 5: Configure Email Body (HTML Content)

### Step 5.1: Locate Body/Content Section

In the template editor, find the area for the email body/content.

There should be:
- A toggle for "HTML" mode (make sure it's enabled)
- A text editor for the email content

### Step 5.2: Copy and Paste Template

Copy the entire HTML content below and paste it into the email body:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .field {
            margin-bottom: 20px;
            border-left: 4px solid #667eea;
            padding-left: 15px;
        }
        .field-label {
            font-weight: bold;
            color: #667eea;
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .field-value {
            color: #333;
            font-size: 14px;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #666;
            border-radius: 0 0 8px 8px;
        }
        .reply-info {
            background-color: #e8f4f8;
            padding: 10px;
            border-radius: 4px;
            margin-top: 15px;
            font-size: 12px;
            color: #0066cc;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌟 New Contact Form Submission</h1>
            <p>Vivekananda Global Devotees</p>
        </div>
        
        <div class="content">
            <p>Hello,</p>
            <p>A new message has been submitted through the contact form on your website. Here are the details:</p>
            
            <div class="field">
                <div class="field-label">Sender Name</div>
                <div class="field-value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">{{subject}}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Message</div>
                <div class="field-value">{{message}}</div>
            </div>
            
            <div class="reply-info">
                <strong>📧 Reply To:</strong> {{from_email}}<br>
                You can reply directly to this email to contact the sender.
            </div>
        </div>
        
        <div class="footer">
            <p>This is an automated message from your Vivekananda Global Devotees website.</p>
            <p>© 2025 Vivekananda Global Devotees. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

### Step 5.3: Important Variables in Template

The following variables **MUST** be included in your template:

| Variable | Description | Required |
|----------|-------------|----------|
| `{{from_name}}` | Sender's full name | Yes |
| `{{from_email}}` | Sender's email address | Yes |
| `{{subject}}` | Email subject line | Yes |
| `{{message}}` | Main message body | Yes |

**Rules for variables:**
- Always use double curly braces: `{{ }}`
- Variable names are case-sensitive
- Names must match exactly what's sent from the form

---

## Phase 6: Review Template Before Saving

### Step 6.1: Check All Fields

Before saving, verify:

- [ ] **Template Name:** "Contact Form - Vivek Global Devotees"
- [ ] **Subject:** Contains `{{from_name}}`
- [ ] **HTML Body:** Contains all 4 variables:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{subject}}`
  - `{{message}}`
- [ ] **Service Selected:** `service_yuwcyrq`

### Step 6.2: Preview (Optional)

Many template editors show a preview of how the email will look:

- Click **"Preview"** if available
- Check that it looks professional and readable
- Verify all placeholders show (e.g., `{{from_name}}`)

---

## Phase 7: Save Template

### Step 7.1: Save Button

Look for a **"Save"** button, usually at:
- Bottom-right of the form
- Top-right of the template editor
- Or in a menu

**Click "Save"**

### Step 7.2: Confirmation

You should see:
- Success message: "Template saved" or similar
- Template added to your templates list
- Page may refresh

---

## Phase 8: Get Template ID

### Step 8.1: Return to Templates List

If not already there, click **"Email Templates"** in the left menu

### Step 8.2: Locate Your Template

Find: **"Contact Form - Vivek Global Devotees"**

### Step 8.3: Copy Template ID

**Option A - Using Menu (Recommended):**
1. Click the **three dots (⋮)** icon next to your template
2. Select **"Copy Template ID"**
3. The ID is now in your clipboard
4. Go to next step

**Option B - From URL:**
1. Click on the template name to open it
2. Look at the browser URL: 
   ```
   https://dashboard.emailjs.com/admin/templates/TEMPLATE_ID
   ```
3. Copy the `TEMPLATE_ID` part (after the last `/`)

---

## Phase 9: Update .env.local

### Step 9.1: Open .env.local File

In your project, open:
```
.env.local
```

Find this line:
```bash
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
```

### Step 9.2: Replace with Your Template ID

Replace the placeholder with your actual Template ID:

**Before:**
```bash
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
```

**After (example):**
```bash
VITE_EMAILJS_TEMPLATE_ID=template_abc12345def6
```

### Step 9.3: Save File

Save the `.env.local` file (Ctrl+S)

---

## Phase 10: Restart Development Server

### Step 10.1: Restart Dev Server

If your dev server is running:

1. Press **Ctrl+C** in the terminal to stop it
2. Run:
   ```bash
   npm run dev
   ```

This ensures the new environment variable is loaded.

---

## Phase 11: Test the Setup

### Step 11.1: Navigate to Contact Form

1. Go to your application: `http://localhost:5173/contact`
2. Or navigate via the website menu → "Contact Us"

### Step 11.2: Fill Out Test Form

Complete all fields:

| Field | Test Value |
|-------|-----------|
| **Name** | Test User |
| **Email** | your-email@gmail.com |
| **Subject** | Test Contact Form |
| **Message** | This is a test message to verify EmailJS setup is working correctly. |

### Step 11.3: Submit Form

Click the **"Send Message"** button

### Step 11.4: Check Results

**Expected Success:**
- ✅ Green message appears: "Message Sent!"
- ✅ Form clears automatically
- ✅ Email arrives in `info@vivek-global.org` inbox within seconds

**If Error Occurs:**
- ❌ Red error message appears
- Check browser console: Press F12 → Console tab
- Look for error message about credentials
- See "Troubleshooting" section below

---

## Troubleshooting

### Error: "Could not send email"

**Possible causes and solutions:**

1. **Wrong Template ID**
   - Go back to EmailJS dashboard
   - Copy Template ID again (use three dots menu)
   - Update `.env.local`
   - Restart dev server

2. **Service not connected**
   - In EmailJS dashboard, go to "Services"
   - Check that `service_yuwcyrq` is listed and enabled
   - If missing, create a new service

3. **Template not published**
   - In EmailJS dashboard, go to "Email Templates"
   - Make sure your template appears in the list
   - It should be enabled/published

4. **Environment variable not loaded**
   - Check `.env.local` has correct format: `VITE_EMAILJS_TEMPLATE_ID=template_xxxxx`
   - No quotes, no extra spaces
   - Restart dev server after saving

### Error: "Template variables not replaced"

**Solution:**
- Check template HTML contains: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Verify double curly braces: `{{ }}`
- Make sure variable names are exact (case-sensitive)

### Email received but variables show as blank

**Solution:**
- Check Contact.tsx (line 109-116) sending correct field names
- Verify `.env.local` has correct Template ID
- Re-test the form

---

## Email Content Reference

When someone submits the contact form, they'll receive an email that looks like:

```
From: noreply@emailjs.com
To: info@vivek-global.org
Subject: New Contact Form Submission from John Doe
Reply-To: john@example.com

═══════════════════════════════════════════════════════════

🌟 NEW CONTACT FORM SUBMISSION
Vivekananda Global Devotees

═══════════════════════════════════════════════════════════

Hello,

A new message has been submitted through the contact form on 
your website. Here are the details:

SENDER NAME
John Doe

EMAIL ADDRESS
john@example.com

SUBJECT
Inquiry About Scholarship Program

MESSAGE
I am interested in learning more about your scholarship program 
and would like to know the eligibility criteria. Please let me 
know how to apply.

═══════════════════════════════════════════════════════════

📧 REPLY TO: john@example.com
You can reply directly to this email to contact the sender.

═══════════════════════════════════════════════════════════

This is an automated message from your Vivekananda Global 
Devotees website.

© 2025 Vivekananda Global Devotees. All rights reserved.
```

---

## Verification Checklist

After completing all steps:

- [ ] EmailJS account created
- [ ] Email service connected (`service_yuwcyrq`)
- [ ] Template created: "Contact Form - Vivek Global Devotees"
- [ ] Template includes all 4 variables
- [ ] Template ID copied
- [ ] `.env.local` updated with Template ID
- [ ] Development server restarted
- [ ] Contact form tested with test data
- [ ] Email received in inbox
- [ ] Email subject shows sender's name
- [ ] Email body shows all form fields

---

## Next Steps

1. ✅ Complete template creation (this guide)
2. ✅ Get Template ID
3. ✅ Update `.env.local`
4. ✅ Test contact form
5. ✅ Check email inbox

**Your contact form is now fully functional!**

---

## Quick Reference

| Item | Value |
|------|-------|
| **EmailJS Dashboard** | https://dashboard.emailjs.com/ |
| **Service ID** | service_yuwcyrq |
| **Template Name** | Contact Form - Vivek Global Devotees |
| **Email Subject** | New Contact Form Submission from {{from_name}} |
| **Required Variables** | {{from_name}}, {{from_email}}, {{subject}}, {{message}} |
| **Recipient** | info@vivek-global.org |
| **Contact Form URL** | http://localhost:5173/contact |

---

## Support

For additional help:
- See **EMAILJS_TEMPLATE_SETUP_GUIDE.md** for full documentation
- See **EMAILJS_TEMPLATE_ID_QUICK_GUIDE.md** for quick reference
- Check **Contact.tsx** for form implementation details
