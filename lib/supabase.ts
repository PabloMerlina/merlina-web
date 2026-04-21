import { createClient } from '@supabase/supabase-js';
import { createMockSupabaseClient } from './supabase-mock';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const isRealConfig = supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('placeholder') &&
  !supabaseAnonKey.includes('placeholder');

let supabase: any = null;

if (isRealConfig) {
  // Usar cliente real de Supabase
  supabase = createClient(supabaseUrl!, supabaseAnonKey!);
} else {
  // Usar mock para desarrollo local
  supabase = createMockSupabaseClient();
  console.log('🔧 Usando Supabase mock para desarrollo local');
}

export { supabase };
export const isSupabaseConfigured = () => isRealConfig;
export const isLocalDevelopment = () => !isRealConfig;
