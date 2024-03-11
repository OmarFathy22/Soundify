"use client";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import toast from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const authModal = useAuthModal();
  const router = useRouter();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // reset any playing song
    router.refresh();

    if (error) {
      toast.error(error.message);
    }
    else{
      toast.success("Logged out")
    }
  };
  return (
    <div className="flex gap-2">
      {user ? (
        <>
        <button
          onClick={handleLogout}
          className="p-1 px-3 bg-[white] font-bold text-[#111] rounded-full hover:opacity-80 transition-all"
          >
          Log out
        </button>
        <button
          onClick={authModal.onOpen}
          className="p-1 px-3 bg-[white] font-bold text-[#111] rounded-full hover:opacity-80 transition-all"
        >
          <FaUserAlt/>
        </button>
      </>
      ) : (
        <>
          <button
            onClick={authModal.onOpen}
            className="p-1 px-3 font-bold  rounded-full hover:opacity-80 transition-all"
          >
            Sign up
          </button>
          <button
            onClick={authModal.onOpen}
            className="p-1 px-3 bg-[white] font-bold text-[#111] rounded-full hover:opacity-80 transition-all"
          >
            Sign in
          </button>
        </>
      )}
    </div>
  );
}
