import { createContext } from "react";

import { useAuth } from "../../hooks/useAuth";

import type { ReactNode } from "react";
import type { SessionData } from "~/types";

export const authContext = createContext<SessionData>({
  sessionData: null,
  loading: true,
});

interface ProvideAuthProps {
  children: ReactNode;
}

export const ProvideAuth = ({ children }: ProvideAuthProps) => {
  const { sessionData, loading } = useAuth();
  let auth = { sessionData, loading };

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
