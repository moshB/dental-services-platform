// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vdywqcxspgcazwlumrjp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkeXdxY3hzcGdjYXp3bHVtcmpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MTcyNDAsImV4cCI6MjA1MDE5MzI0MH0.PIi9eZRSEdgYqnbWKacM6P8GmBEI7n74jWJBof6DbFA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);