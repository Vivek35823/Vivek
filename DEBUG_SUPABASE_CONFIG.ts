// ============================================================================
// DEBUG: Check if Supabase is properly configured
// ============================================================================
// Add this to your browser console to debug

// Check environment variables
console.log('=== SUPABASE CONFIGURATION DEBUG ===');
console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('VITE_SUPABASE_ANON_KEY exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);

// Check if USE_SUPABASE would be true
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const USE_SUPABASE = supabaseUrl && supabaseKey;
console.log('USE_SUPABASE:', USE_SUPABASE);

if (!USE_SUPABASE) {
  console.warn('⚠️ SUPABASE NOT CONFIGURED!');
  console.warn('App is using localStorage fallback instead of database');
  console.warn('Make sure .env.local has VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
} else {
  console.log('✅ SUPABASE IS CONFIGURED');
}

// Check localStorage fallback data
console.log('=== LOCALSTORAGE DATA ===');
const members = JSON.parse(localStorage.getItem('vivek_members') || '[]');
const scholarships = JSON.parse(localStorage.getItem('vivek_scholarships') || '[]');
const donations = JSON.parse(localStorage.getItem('vivek_donations') || '[]');

console.log('Members in localStorage:', members.length);
console.log('Scholarship applications in localStorage:', scholarships.length);
console.log('Donations in localStorage:', donations.length);

if (members.length > 0) console.log('First member:', members[0]);
if (scholarships.length > 0) console.log('First scholarship app:', scholarships[0]);
if (donations.length > 0) console.log('First donation:', donations[0]);

// Manual test: Try to fetch from Supabase
if (USE_SUPABASE) {
  console.log('=== TESTING SUPABASE CONNECTION ===');
  console.log('Attempting to fetch scholarship_applications...');
  
  // This is just for inspection - can't actually run this in console
  console.log('You can test this by:');
  console.log('1. Open Supabase dashboard');
  console.log('2. Go to Table Editor');
  console.log('3. Check if scholarship_applications table has data');
}
