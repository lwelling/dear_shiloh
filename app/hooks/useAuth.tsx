import { useCallback, useEffect, useState } from "react";

import supabase from "~/supabaseClient";

import type { Session } from "@supabase/supabase-js";
import type { SessionData } from "~/types";

export const useAuth = (): SessionData => {
  let [loading, setLoading] = useState(true);
  let [sessionData, setSessionData] = useState<Session | null>(null);

  const getSession = useCallback(async () => {
    setLoading(true);
    try {
      let {
        data: { session },
      } = await supabase.auth.getSession();
      setSessionData(session);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const getAuthSession = async () => {
      getSession();
      supabase.auth.onAuthStateChange(async (_event, session) => {
        getSession();
      });
    };

    getAuthSession();
  }, [getSession]);

  return {
    sessionData,
    loading,
  };
};
