// Test Supabase connection
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://drojmyvmaeswrgbzgylr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyb2pteXZtYWVzd3JnYnpneWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMDYzMzQsImV4cCI6MjA4MTg4MjMzNH0.9tka4Xs1PFRkkjvys51SzNZnPyWQJ3RJTuEfkurXmxee';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    // Try to read from members table
    const { data, error } = await supabase
      .from('members')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('Error reading from members table:', error);
      return;
    }
    
    console.log('✓ Connection successful! Members table accessible');
    console.log('Sample data:', data);
    
    // Try to insert a test record
    const testData = {
      full_name: 'Test User',
      email: 'test-' + Date.now() + '@example.com',
      country: 'USA',
      occupation: 'Engineer'
    };
    
    console.log('Attempting insert with:', testData);
    
    const { data: insertData, error: insertError } = await supabase
      .from('members')
      .insert([testData])
      .select();
    
    if (insertError) {
      console.error('Error inserting test record:', insertError);
      return;
    }
    
    console.log('✓ Insert successful!', insertData);
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

testConnection();
