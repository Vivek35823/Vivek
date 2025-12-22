# EmailJS Template Setup Guide for Contact Form

## Overview
This guide will help you set up EmailJS templates for the Vivekananda Global Devotees contact form. EmailJS allows you to send emails directly from your React application without a backend server.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step-by-Step Setup Guide](#step-by-step-setup-guide)
3. [Contact Form Template](#contact-form-template)
4. [Finding Your Template ID](#finding-your-template-id)
5. [Environment Variables Configuration](#environment-variables-configuration)
6. [Testing Your Setup](#testing-your-setup)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, make sure you have:
- An EmailJS account (sign up at https://www.emailjs.com/)
- Access to your email provider (Gmail, Outlook, Yahoo, etc.)
- The EmailJS Public Key (already configured: `-NpOQf59AFtneU2uu`)
- The EmailJS Service ID (already configured: `service_yuwcyrq`)

---

## Step-by-Step Setup Guide

### Step 1: Log in to EmailJS Dashboard

1. Go to https://dashboard.emailjs.com/
2. Sign in with your EmailJS account
3. You should see your dashboard with sections for:
   - Services
   - Email Templates
   - Account Settings

### Step 2: Create or Configure Email Service

#### If you don't have a service yet:

1. Click on **"Add Service"** in the Services section
2. Choose your email provider:
   - **Gmail** (most popular)
   - **Outlook**
   - **Yahoo Mail**
   - **Custom SMTP**
3. Follow the provider's instructions

#### For Gmail (Recommended):

1. Click **"Connect Account"**
2. Sign in with your Gmail account
3. Allow EmailJS to access your account
4. EmailJS will create the service automatically
5. Copy your **Service ID** (format: `service_xxxxx`)
   - This is already configured in your `.env.local` as `VITE_EMAILJS_SERVICE_ID=service_yuwcyrq`

---

## Contact Form Template

### Step 3: Create Email Template

1. In the EmailJS Dashboard, go to **"Email Templates"** section
2. Click **"Create New Template"**
3. Fill in the template details:

#### Template Name
```
Contact Form - Vivek Global Devotees
```

#### Template Subject
```
New Contact Form Submission from {{from_name}}
```

#### Email Content (HTML)

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

### Step 4: Configure Template Variables

In the template, make sure these variables are properly set:

| Variable | Data Type | Description |
|----------|-----------|-------------|
| `{{from_name}}` | String | Sender's name from the form |
| `{{from_email}}` | String | Sender's email address |
| `{{subject}}` | String | Email subject line |
| `{{message}}` | String | Main message body |

**Note:** These variables MUST match the object keys sent from your React component. In the contact form, these are sent as:
```typescript
{
  to_email: 'info@vivek-global.org',
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
  reply_to: formData.email,
}
```

---

## Finding Your Template ID

### Step 5: Get Your Template ID

After creating your template:

1. Go to **"Email Templates"** in the EmailJS Dashboard
2. Find your newly created template: **"Contact Form - Vivek Global Devotees"**
3. Click on the template name to open it
4. Look at the URL in your browser - it will be something like:
   ```
   https://dashboard.emailjs.com/admin/templates/[TEMPLATE_ID]
   ```
   
   Copy the `[TEMPLATE_ID]` part

5. **Alternative method:** 
   - Click the three dots (⋮) menu on your template
   - Select **"Copy Template ID"**
   - This copies it to your clipboard

6. Your Template ID will look like: `template_xxxxx` or similar

### Visual Guide to Find Template ID

```
EmailJS Dashboard
    ↓
Email Templates (left sidebar)
    ↓
Your template: "Contact Form - Vivek Global Devotees"
    ↓
Click on template name
    ↓
URL shows: dashboard.emailjs.com/admin/templates/[TEMPLATE_ID]
    ↓
Copy the TEMPLATE_ID portion
```

---

## Environment Variables Configuration

### Step 6: Update .env.local File

Open your `.env.local` file and update the EmailJS configuration:

**Current state:**
```bash
VITE_EMAILJS_PUBLIC_KEY=-NpOQf59AFtneU2uu
VITE_EMAILJS_SERVICE_ID=service_yuwcyrq
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
```

**Updated with your actual Template ID:**
```bash
VITE_EMAILJS_PUBLIC_KEY=-NpOQf59AFtneU2uu
VITE_EMAILJS_SERVICE_ID=service_yuwcyrq
VITE_EMAILJS_TEMPLATE_ID=template_abc12345def6
```

Replace `template_abc12345def6` with your actual Template ID from Step 5.

### Important Notes:
- Keep these credentials **private** and never commit `.env.local` to version control
- The `.env.local` file is already in `.gitignore` for security
- EmailJS Public Key is safe to expose, but keep Service ID and Template ID private when possible

---

## Testing Your Setup

### Step 7: Test the Contact Form

1. Navigate to your application's Contact Us page: `http://localhost:5173/contact`
2. Fill in the form with test data:
   - **Name:** Test User
   - **Email:** your-email@example.com
   - **Subject:** Test Message
   - **Message:** This is a test message to verify EmailJS setup
3. Click **"Send Message"** button
4. You should see a success message: **"Message Sent!"**
5. Check your inbox at `info@vivek-global.org` for the email

### What Should Happen:

✅ **Success Scenario:**
- Green success message appears
- Form clears
- Email arrives in `info@vivek-global.org` inbox
- Email appears to come from your email address with reply-to set

❌ **Failure Scenario:**
- Red error message appears
- Check browser console (F12 → Console tab) for errors
- Verify Template ID in `.env.local` is correct
- Check that Service ID and Public Key are correct

---

## Troubleshooting

### Issue 1: "Error sending message"

**Solution:**
1. Check that all three EmailJS credentials are in `.env.local`:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`

2. Verify the Template ID matches exactly (no typos)

3. Restart your development server:
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```

### Issue 2: Template ID not found

**Solution:**
1. Double-check the Template ID from your EmailJS dashboard
2. Make sure the template is **published** (not in draft)
3. The template must be associated with your Service ID

### Issue 3: Email not arriving

**Solution:**
1. Check spam/junk folder
2. Verify the recipient email (`info@vivek-global.org`) is correct
3. Check EmailJS dashboard for failed sends
4. Ensure your email service (Gmail/Outlook) allows SMTP access

### Issue 4: "Invalid credentials"

**Solution:**
1. Verify Service ID is correct: `service_yuwcyrq`
2. Check that the service is **enabled** in EmailJS dashboard
3. Make sure the service hasn't been deleted

### Issue 5: Variables not replacing

**Solution:**
1. Check that template variable names match exactly:
   - Should be: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
   - Must use double curly braces: `{{ }}`
   
2. Verify the React code sends matching field names (see Contact.tsx line 109-116)

### Debug Checklist:

- [ ] EmailJS account created and logged in
- [ ] Email service connected (Gmail/Outlook)
- [ ] Service ID is `service_yuwcyrq`
- [ ] Email template created
- [ ] Template ID copied correctly
- [ ] `.env.local` updated with Template ID
- [ ] Development server restarted
- [ ] Contact form tested
- [ ] Email received in inbox

---

## Additional Configuration (Optional)

### Add Reply-To Email Address

EmailJS automatically sets the reply-to header from the `reply_to` field in your contact form (line 116 in Contact.tsx):

```typescript
reply_to: formData.email,
```

This allows you to reply directly to the sender's email.

### Add CC/BCC (Advanced)

If you want to carbon copy other recipients, you can add to your template variables:

```html
<!-- In template, you can reference these if added to the form submission: -->
{{cc_email}}
{{bcc_email}}
```

Then update Contact.tsx to include:
```typescript
cc_email: 'founder@vivek-global.org',
```

---

## Security Best Practices

1. **Never commit `.env.local` to version control** - already in `.gitignore` ✅
2. **Rotate credentials periodically** - check EmailJS dashboard quarterly
3. **Monitor template changes** - EmailJS logs all modifications
4. **Set up rate limiting** - prevent spam abuse (can be done via EmailJS dashboard)
5. **Validate form data** - the Contact.tsx already does basic validation

---

## Support & Resources

- **EmailJS Documentation:** https://www.emailjs.com/docs/
- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **Contact Form Component:** `pages/Contact.tsx`
- **Database Service:** `services/dbService.ts`

---

## Summary

You now have everything needed to:
1. ✅ Create an EmailJS email template
2. ✅ Find and copy your Template ID
3. ✅ Configure your `.env.local` file
4. ✅ Test the contact form
5. ✅ Troubleshoot any issues
6. ✅ Send emails from your application

**Next Steps:** 
- Complete Step 6 (update `.env.local` with your Template ID)
- Follow Step 7 (test your setup)
- Your contact form will now be fully functional!
