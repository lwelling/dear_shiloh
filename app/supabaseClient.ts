import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://sfwdzzaumnkgibuuomoi.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmd2R6emF1bW5rZ2lidXVvbW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMxMjgwNDksImV4cCI6MTk5ODcwNDA0OX0.FrlEHT85M02hXENkqUNc7GaGXniAuATlQT7rXaC70zU';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;