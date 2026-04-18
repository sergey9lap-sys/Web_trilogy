import { createClient } from "@supabase/supabase-js";

export type MaterialDay = "day1" | "day2" | "day3";

export type Material = {
  title: string;
  description: string;
  url: string;
  type: string;
};

export type MaterialRecord = {
  day: MaterialDay;
  code_hash_or_code: string;
  title: string;
  description: string;
  url: string;
  type: string;
  is_active: boolean;
};

export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
