// Supabase Configuration File
const SUPABASE_URL = 'https://jnzlsnngdjzbznxleore.supabase.co'; // Replace with your URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impuemxzbm5nZGp6YnpueGxlb3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1OTAyMTcsImV4cCI6MjA3MzE2NjIxN30.2VuxDjgkFgjgwO_NQqmso3fhpPyAlVxDmwrUdZSkWg0';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);