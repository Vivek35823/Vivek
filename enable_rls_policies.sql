-- ============================================================================
-- SUPABASE - ENABLE PUBLIC ACCESS & RLS POLICIES
-- ============================================================================
-- Run this in your Supabase SQL Editor to enable public access to tables
-- This solves the "Could not find the table in the schema cache" error
-- ============================================================================

-- ============================================================================
-- 1. ENABLE RLS AND SET POLICIES FOR MEMBERS TABLE
-- ============================================================================
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on members"
  ON members
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public select on members"
  ON members
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public update on members"
  ON members
  FOR UPDATE
  TO public
  USING (true);

-- ============================================================================
-- 2. ENABLE RLS AND SET POLICIES FOR SCHOLARSHIP_APPLICATIONS
-- ============================================================================
ALTER TABLE scholarship_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on scholarship_applications"
  ON scholarship_applications
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public select on scholarship_applications"
  ON scholarship_applications
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public update on scholarship_applications"
  ON scholarship_applications
  FOR UPDATE
  TO public
  USING (true);

-- ============================================================================
-- 3. ENABLE RLS AND SET POLICIES FOR DONATIONS
-- ============================================================================
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on donations"
  ON donations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public select on donations"
  ON donations
  FOR SELECT
  TO public
  USING (true);

-- ============================================================================
-- 4. ENABLE RLS AND SET POLICIES FOR CONTACT_MESSAGES
-- ============================================================================
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on contact_messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public select on contact_messages"
  ON contact_messages
  FOR SELECT
  TO public
  USING (true);

-- ============================================================================
-- 5. ENABLE RLS AND SET POLICIES FOR EVENTS
-- ============================================================================
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public select on events"
  ON events
  FOR SELECT
  TO public
  USING (true);

-- ============================================================================
-- 6. ENABLE RLS AND SET POLICIES FOR EVENT_REGISTRATIONS
-- ============================================================================
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on event_registrations"
  ON event_registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public select on event_registrations"
  ON event_registrations
  FOR SELECT
  TO public
  USING (true);

-- ============================================================================
-- 7. ENABLE RLS AND SET POLICIES FOR OTHER TABLES
-- ============================================================================
ALTER TABLE scholarships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public select on scholarships"
  ON scholarships
  FOR SELECT
  TO public
  USING (true);

ALTER TABLE library_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public select on library_items"
  ON library_items
  FOR SELECT
  TO public
  USING (true);

ALTER TABLE prayer_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert on prayer_sessions"
  ON prayer_sessions
  FOR INSERT
  TO public
  WITH CHECK (true);

ALTER TABLE prayer_participants ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert on prayer_participants"
  ON prayer_participants
  FOR INSERT
  TO public
  WITH CHECK (true);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert on feedback"
  ON feedback
  FOR INSERT
  TO public
  WITH CHECK (true);

-- ============================================================================
-- ALL POLICIES CREATED SUCCESSFULLY!
-- ============================================================================
-- Your tables are now accessible to your app
-- You can now try registering members, donations, and scholarship applications
-- ============================================================================
