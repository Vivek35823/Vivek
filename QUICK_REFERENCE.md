# Quick Reference Guide - Vivekananda Platform

## Admin Panel Access
**URL:** `http://localhost:3000/admin-panel`
**Password:** `admin123`

---

## User-Facing Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Homepage |
| Membership | `/membership` | Register as member |
| Donation | `/donation` | Make donation |
| Scholarship Apply | `/scholarship-apply` | Submit scholarship application |
| Scholarships | `/scholarships` | View available scholarships |
| Events | `/events` | View events |
| Prayers | `/prayers` | View prayer sessions |
| Library | `/library` | View library items |
| Contact | `/contact` | Send contact message |
| About | `/about` | About page |

---

## Admin Pages

| Page | URL | Purpose |
|------|-----|---------|
| Admin Panel | `/admin-panel` | Main admin dashboard |
| Admin Debug | `/admin-debug` | View raw data (for debugging) |

---

## Database Tables

```
members - Store member information
scholarship_applications - Store scholarship applications
donations - Store donation records
contact_messages - Store contact form submissions
events - Store event information
event_registrations - Track event registrations
scholarships - Reference data for scholarships
library_items - Digital library content
prayer_sessions - Prayer session information
prayer_participants - Track prayer session attendees
admin_users - Admin accounts
activity_logs - Audit trail
statistics - Aggregated statistics
email_templates - Email templates
feedback - User feedback
document_uploads - Uploaded files
```

---

## Key Features

### 📊 Admin Dashboard
- Total Members count
- Total Donations amount
- Total Applications count
- Three tabs: Members, Donations, Applications

### 👥 Members Tab
- View all members
- Search by name or email
- Member statistics

### 💰 Donations Tab
- View all donations
- Donor information
- Amount and currency
- Transaction ID
- Search functionality

### 📝 Scholarships Tab
- View all applications
- **Click applicant name to see full details**
- Status tracking (pending/approved/rejected)
- Search functionality
- Personal, family, address, academic, financial, bank details

### 🔍 Admin Debug Page
- View raw JSON data
- Useful for debugging
- Shows exactly what's in the database

---

## Most Used Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Environment Variables (.env.local)

```
GEMINI_API_KEY=your-api-key

# Supabase Configuration
VITE_SUPABASE_URL=https://rcapczsnthqgtagwxgyj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

---

## Troubleshooting Quick Tips

| Problem | Solution |
|---------|----------|
| No data showing | Check `.env.local` has Supabase credentials |
| Modal blank | Browser console should show "Fetched applications" with data |
| Can't login | Password is case-sensitive: `admin123` |
| Data not saved | Verify Supabase connection in browser console |
| Styling looks off | Clear browser cache (F12 → Storage → Clear All) |

---

## Browser Console Useful Logs

When debugging, look for these in F12 → Console:

```javascript
// Should show when fetching applications
"Fetched and converted applications: [...]"

// Should show when mapping data
"Mapped applications: [...]"

// Should show Supabase configuration
"Supabase URL: https://..."
"Supabase Key exists: true"
```

---

## Important Files

```
src/
├── pages/
│   ├── AdminPanel.tsx          ← Admin dashboard
│   ├── AdminDebug.tsx          ← Debug page
│   ├── ScholarshipApplication.tsx  ← Scholarship form
│   ├── Membership.tsx          ← Member form
│   └── Donation.tsx            ← Donation form
├── services/
│   ├── dbService.ts            ← Database operations
│   └── supabaseClient.ts       ← Supabase setup
├── types.ts                    ← TypeScript types
└── .env.local                  ← Configuration

Database SQL Files:
├── create_tables.sql           ← Create all tables
├── database_functions.sql      ← Create functions
└── enable_rls_policies.sql     ← Enable access
```

---

## Common Tasks

### Add a New Tab to Admin Panel
Edit: `pages/AdminPanel.tsx`
- Add type to `TabType`
- Add useState for data
- Add loadData for that data
- Add tab button in UI
- Add filtered data display

### Add a New Field to Scholarship Application
1. Edit: `types.ts` - add field to `ScholarshipApplication`
2. Edit: `pages/ScholarshipApplication.tsx` - add form input
3. Edit: `services/dbService.ts` - update mapping
4. Edit: `pages/AdminPanel.tsx` - show in modal

### Update Database Schema
1. Create SQL migration file
2. Run in Supabase SQL Editor
3. Update types.ts if needed
4. Update dbService.ts mapping

---

## Database Backup

To backup your data:
1. Go to Supabase dashboard
2. Settings → Database → Backups
3. Create manual backup or enable automated backups

To export:
1. Table Editor → Select table
2. Click menu (⋮) → Export data as CSV

---

## Performance Tips

- Database has indexes on all frequently searched fields
- RLS policies are optimized
- Frontend uses React state efficiently
- Supabase client is configured with best practices

---

## Contact Information

For issues with:
- **Admin Panel:** Check `ADMIN_PANEL_TESTING.md`
- **Database:** Check `DATABASE_SETUP_INSTRUCTIONS.md`
- **Data Not Showing:** Check `TROUBLESHOOT_MISSING_DATA.md`
- **Modal Details:** Check `NEXT_STEPS_FIX_MODAL.md`

---

## Status: ✅ COMPLETE

All features are working:
- ✅ Database setup
- ✅ Admin dashboard
- ✅ Scholarship detail modal
- ✅ Data persistence
- ✅ Search functionality
- ✅ Form submissions
- ✅ Error handling

**Current Version:** 1.0
**Last Updated:** December 22, 2025
