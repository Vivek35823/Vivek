// Debug file to help diagnose Supabase issues
// Open browser console and check these logs

import { supabase } from './services/supabaseClient';

export const debugSupabase = async () => {
  console.log('=== SUPABASE DEBUG INFO ===');
  
  // Check environment variables
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  console.log('Supabase URL:', url);
  console.log('Supabase Key exists:', !!key);
  console.log('Key length:', key?.length || 0);
  
  // Try to connect
  try {
    const { data: { session } } = await supabase.auth.getSession();
    console.log('Auth session:', session);
  } catch (err) {
    console.error('Auth check failed:', err);
  }
  
  // Check if we can query
  try {
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('Members table query error:', error);
    } else {
      console.log('Members table accessible:', !!data);
    }
  } catch (err) {
    console.error('Table query failed:', err);
  }
  
  console.log('=== END DEBUG INFO ===');
};

// Call in browser console: 
// import { debugSupabase } from './debug.js'
// debugSupabase()
