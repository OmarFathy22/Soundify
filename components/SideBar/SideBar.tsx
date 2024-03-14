
"use client"
import * as React from "react";
import MainRoutes from "./MainRoutes";
import Library from "./Library";
import getSongsByUserId from "@/actions/getSongsByUserId";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

export interface IAppProps {
  userSongs: Song[];
}

export default  function App({userSongs}: IAppProps) {
  const player = usePlayer()

  return (
    <div className={`rounded-lg flex flex-col gap-2 overflow-hidden ${player.activeId && 'h-[calc(100vh-90px)]'}  max_900:hidden !w-[300px] `}>
      <MainRoutes />
      <Library userSongs={userSongs} />
    </div>
  );
}
