import type { Session } from "@supabase/supabase-js";

export interface Memory {
  id: number;
  created_at: Date;
  body: string;
}

export interface SessionData {
  sessionData: Session | null;
  loading: boolean;
}