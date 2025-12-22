#!/usr/bin/env node
/**
 * Quick Diagnostic Script to Check Supabase Configuration
 * Run this to verify your setup is correct
 */

const fs = require('fs');
const path = require('path');

console.log('\n========================================');
console.log('SUPABASE CONFIGURATION DIAGNOSTIC');
console.log('========================================\n');

// Check 1: .env.local file exists
console.log('1️⃣  Checking .env.local file...');
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  console.log('   ✅ .env.local file EXISTS');
  
  // Read and check contents
  const envContent = fs.readFileSync(envPath, 'utf8');
  const hasUrl = envContent.includes('VITE_SUPABASE_URL');
  const hasKey = envContent.includes('VITE_SUPABASE_ANON_KEY');
  
  if (hasUrl && hasKey) {
    console.log('   ✅ Both VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY found');
    
    // Parse the values
    const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.+)/);
    const keyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.+)/);
    
    if (urlMatch && keyMatch) {
      const url = urlMatch[1].trim();
      const key = keyMatch[1].trim().substring(0, 30) + '...';
      console.log(`   📍 URL: ${url}`);
      console.log(`   🔑 Key: ${key}`);
    }
  } else {
    console.log('   ❌ Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY');
    console.log('   Add both to .env.local file');
  }
} else {
  console.log('   ❌ .env.local file NOT FOUND');
  console.log('   Create .env.local in project root with:');
  console.log('   VITE_SUPABASE_URL=https://your-project.supabase.co');
  console.log('   VITE_SUPABASE_ANON_KEY=your-anon-key');
}

// Check 2: Database schema files
console.log('\n2️⃣  Checking database files...');
const dbFiles = [
  'create_tables.sql',
  'database_functions.sql',
  'enable_rls_policies.sql'
];

dbFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file} exists`);
  } else {
    console.log(`   ❌ ${file} NOT found`);
  }
});

// Check 3: Services
console.log('\n3️⃣  Checking service files...');
const serviceFiles = [
  'services/supabaseClient.ts',
  'services/dbService.ts'
];

serviceFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file} exists`);
  } else {
    console.log(`   ❌ ${file} NOT found`);
  }
});

// Check 4: TypeScript types
console.log('\n4️⃣  Checking type definitions...');
const typesPath = path.join(process.cwd(), 'types.ts');
if (fs.existsSync(typesPath)) {
  const content = fs.readFileSync(typesPath, 'utf8');
  const hasScholarshipType = content.includes('ScholarshipApplication');
  const hasMemberType = content.includes('Member');
  const hasDonationType = content.includes('Donation');
  
  console.log(`   ${hasScholarshipType ? '✅' : '❌'} ScholarshipApplication type`);
  console.log(`   ${hasMemberType ? '✅' : '❌'} Member type`);
  console.log(`   ${hasDonationType ? '✅' : '❌'} Donation type`);
} else {
  console.log('   ❌ types.ts NOT found');
}

console.log('\n========================================');
console.log('NEXT STEPS:');
console.log('========================================');
console.log('1. If .env.local is missing or incomplete:');
console.log('   - Get values from: supabase.com/dashboard');
console.log('   - Go to: Settings → API');
console.log('   - Create .env.local with those values');
console.log('   - Restart dev server: npm run dev');
console.log('');
console.log('2. If .env.local is complete:');
console.log('   - Clear browser cache: F12 → Storage → Clear All');
console.log('   - Go to: http://localhost:3000/scholarship-apply');
console.log('   - Submit a test application');
console.log('   - Check: http://localhost:3000/admin-debug');
console.log('   - Check: http://localhost:3000/admin-panel');
console.log('');
console.log('3. If still not working:');
console.log('   - Check browser console: F12 → Console');
console.log('   - Look for error messages');
console.log('   - Check Supabase dashboard');
console.log('\n');
