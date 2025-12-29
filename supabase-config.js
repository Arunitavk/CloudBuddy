// Supabase Configuration File
const SUPABASE_URL = 'https://jnzlsnngdjzbznxleore.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impuemxzbm5nZGp6YnpueGxlb3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1OTAyMTcsImV4cCI6MjA3MzE2NjIxN30.2VuxDjgkFgjgwO_NQqmso3fhpPyAlVxDmwrUdZSkWg0';

// Wait for window.supabase to be available, then create client
let supabaseClient;

if (typeof window.supabase !== 'undefined') {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('Supabase client initialized successfully');
} else {
    console.error('Supabase library not loaded');
}