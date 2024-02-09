
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.DATABASE_PROJECT_URL
const supabaseKey = process.env.NEXT_PUBLIC_DATABASE_API_KEY
const supabase = supabaseUrl && supabaseKey && createClient(supabaseUrl, supabaseKey)