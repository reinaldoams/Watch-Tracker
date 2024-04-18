
import { createClient } from '@supabase/supabase-js'


export function initializeSupabase() {
    const supabaseUrl = process.env.NEXT_PUBLIC_DATABASE_PROJECT_URL
    const supabaseKey = process.env.NEXT_PUBLIC_API_KEY

    console.log('supabaseUrl', supabaseUrl)
    
    console.log('supabaseKey', supabaseKey)

    const supabase = supabaseUrl && supabaseKey && createClient(supabaseUrl, supabaseKey)

    return supabase
}