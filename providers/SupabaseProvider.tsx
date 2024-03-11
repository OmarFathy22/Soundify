"use client";

import { Database } from "@/types_supabase";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [subabaseClient] = useState(() => createClientComponentClient<Database>());
  return (
    <SessionContextProvider supabaseClient={subabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;