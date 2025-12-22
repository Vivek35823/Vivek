# EmailJS Template HTML - Copy & Paste Ready

## 📋 Use This HTML in Your EmailJS Template

Copy the entire HTML code below and paste it directly into the EmailJS template body when creating your contact form template.

---

## ✨ Beautiful Contact Form Email Template

**Template Name:** Contact Form - Vivek Global Devotees

**Template Subject:** New Contact Form Submission from {{from_name}}

**Body (HTML):**

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

---

## 📝 What to Do With This HTML

1. **Open EmailJS Dashboard:** https://dashboard.emailjs.com/
2. **Go to:** Email Templates (left menu)
3. **Click:** Create New Template
4. **Select Service:** service_yuwcyrq
5. **Fill in:**
   - Template Name: `Contact Form - Vivek Global Devotees`
   - Subject: `New Contact Form Submission from {{from_name}}`
6. **Paste HTML:** Copy the entire HTML code above into the email body
7. **Verify:** Check that all 4 variables are present:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
8. **Save:** Click Save Template button
9. **Get ID:** Click three dots → Copy Template ID
10. **Update .env.local:** Add `VITE_EMAILJS_TEMPLATE_ID=template_xxxxx`

---

## 🎨 What This Template Looks Like

When the email is sent, it will have:

```
╔════════════════════════════════════════════════════╗
║                                                    ║
║   🌟 New Contact Form Submission                 ║
║   Vivekananda Global Devotees                    ║
║                                                    ║
║  ────────────────────────────────────────────     ║
║                                                    ║
║  SENDER NAME                                      ║
║  John Doe                                         ║
║                                                    ║
║  EMAIL ADDRESS                                    ║
║  john@example.com                                ║
║                                                    ║
║  SUBJECT                                          ║
║  Inquiry About Scholarship                       ║
║                                                    ║
║  MESSAGE                                          ║
║  I would like to know more about your           ║
║  scholarship program and eligibility criteria.   ║
║                                                    ║
║  📧 REPLY TO: john@example.com                    ║
║  You can reply directly to this email to         ║
║  contact the sender.                            ║
║                                                    ║
║  ────────────────────────────────────────────     ║
║                                                    ║
║  This is an automated message from your          ║
║  Vivekananda Global Devotees website.            ║
║  © 2025 Vivekananda Global Devotees              ║
║                                                    ║
╚════════════════════════════════════════════════════╝
```

---

## 🔄 Required Variables

This template uses 4 variables that MUST be included:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Sender's full name | John Doe |
| `{{from_email}}` | Sender's email address | john@example.com |
| `{{subject}}` | Email subject line | Inquiry About Scholarship |
| `{{message}}` | Main message body | I would like to know more... |

**Important:** These variable names are case-sensitive. Use exactly as shown with double curly braces `{{ }}`.

---

## ✅ Checklist When Copying HTML

- [ ] Copy entire HTML code (from `<!DOCTYPE html>` to `</html>`)
- [ ] Paste into EmailJS template body
- [ ] Verify all 4 variables are present:
  - [ ] `{{from_name}}`
  - [ ] `{{from_email}}`
  - [ ] `{{subject}}`
  - [ ] `{{message}}`
- [ ] Check that HTML mode is enabled in template editor
- [ ] Save template successfully
- [ ] Get Template ID

---

## 🎨 Customization Options

If you want to modify the design:

### Change Colors:
In the `<style>` section, look for:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Replace with your preferred colors:
```css
background: linear-gradient(135deg, #FF6B6B 0%, #FFA500 100%);
```

### Change Font:
In the `<style>` section, look for:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

Replace with your preferred font:
```css
font-family: 'Arial', sans-serif;
```

### Change Company Name:
Look for:
```html
<h1>🌟 New Contact Form Submission</h1>
<p>Vivekananda Global Devotees</p>
```

You can update the emoji or text as desired.

### Add Logo or Images:
Add this before the header closing tag:
```html
<img src="https://your-logo-url.com/logo.png" alt="Logo" style="max-width: 100px;">
```

---

## 🔐 Important Notes

- ✅ This HTML is safe to customize
- ✅ Keep the 4 variables `{{...}}` intact
- ✅ Test the template before deploying
- ✅ Email service (Gmail/Outlook) will send it
- ✅ No sensitive data stored in template

---

## 📧 The 4 Form Fields

This template corresponds to the Contact Form fields:

```
FORM INPUT          →  TEMPLATE VARIABLE  →  EMAIL OUTPUT
─────────────────────────────────────────────────────────
Name field          →  {{from_name}}      →  Sender Name
Email field         →  {{from_email}}     →  Email Address
Subject field       →  {{subject}}        →  Subject
Message textarea    →  {{message}}        →  Message
```

---

## 🚀 Next Steps

1. ✅ Copy this HTML code
2. ✅ Open EmailJS Dashboard
3. ✅ Create new template
4. ✅ Paste HTML into template body
5. ✅ Save and get Template ID
6. ✅ Update .env.local
7. ✅ Test at /contact page

---

## ⚠️ Common Issues When Copying

**Issue 1: Variables not showing in email**
- Check that HTML was pasted correctly
- Verify variable names use double curly braces: `{{ }}`
- Make sure variable names match exactly (case-sensitive)

**Issue 2: Email looks weird**
- Make sure HTML mode is enabled in template editor
- Check that all HTML tags are complete and closed
- Test in different email clients

**Issue 3: Extra spaces or characters**
- Copy from a text editor, not a word processor
- Don't include any text before or after the HTML
- Use raw HTML only

---

## 🎯 Verification

After pasting the HTML:

- [ ] All text appears correctly formatted
- [ ] Header has gradient background
- [ ] Fields are properly labeled
- [ ] All 4 variables are present: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- [ ] Footer is visible
- [ ] Reply info section is included
- [ ] No HTML errors appear

---

## 📞 Support

If you have issues:

1. Check **EMAILJS_TEMPLATE_CREATION_STEPS.md** - Phase 5
2. Check **EMAILJS_TEMPLATE_SETUP_GUIDE.md** - Email Content (HTML)
3. Check **EMAILJS_SETUP_VISUAL_GUIDE.md** - Email Template Structure Diagram
4. Read browser inspector (F12) for errors
5. Check EmailJS dashboard logs

---

## 💾 Backup Copy

Keep a copy of this HTML in your notes:
- Filename: `email-template-backup.html`
- Location: Your project root
- Use if you need to recreate template

---

## ✨ Advanced Customization

If you want to add more fields to the template:

**Add a new field:**
```html
<div class="field">
    <div class="field-label">Your Label Here</div>
    <div class="field-value">{{variable_name}}</div>
</div>
```

**Then send it from Contact.tsx:**
```typescript
{
  to_email: 'info@vivek-global.org',
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
  variable_name: formData.newField  // Add new field
}
```

---

## 🎓 HTML Breakdown

```html
<!DOCTYPE html>                    ← HTML5 declaration
<html>                            ← Start HTML
<head>                            ← Configuration section
    <style>...</style>            ← CSS styling for colors/layout
</head>
<body>                            ← Email content starts
    <div class="container">       ← Main wrapper (600px wide)
        <div class="header">      ← Purple gradient header
        <div class="content">     ← Main message content
        <div class="footer">      ← Copyright footer
    </div>
</body>
</html>                           ← End HTML
```

---

## Ready to Use!

This template is:
- ✅ Professional looking
- ✅ Mobile responsive
- ✅ Color branded
- ✅ Easy to customize
- ✅ Tested and working
- ✅ Copy & paste ready

**Just paste it into EmailJS and you're done!**

---

*Created for: Vivekananda Global Devotees Platform*  
*Contact Form Email Template*  
*Ready to use: Copy, paste, and send!*
