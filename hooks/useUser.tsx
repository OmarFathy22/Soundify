import { User } from "@supabase/auth-helpers-nextjs";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";

import { createContext, useContext, useEffect, useState } from "react";
import { UserDetails } from "@/types";
import { Session } from "inspector";
type UserContextType = {
  user: User | null;
  accessToken: string | null;
  isLoading: boolean;
  userDetails: UserDetails | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export interface props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();
  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const getUserDetails = () => supabase.from("users").select("*").single();

  useEffect(() => {
    if (user && !isLoadingData && !userDetails) {
      setIsLoadingData(true);
      getUserDetails().then(({ data, error }) => {
        if (data) {
          setUserDetails(data as UserDetails);
        }
        setIsLoadingData(false);
      });
    }
   else if (!user && !isLoadingData && userDetails) {
    setUserDetails(null);
   }
  }, [user , isLoadingData ]);

  const value = {
    accessToken,
    isLoading: isLoadingUser || isLoadingData,
    user,
    userDetails,
  };

  return <UserContext.Provider  value={value} {...props}/>
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a MyUserContextProvider");
  }
  return context;
}
