"use client"
import * as React from "react";
import SideBar from "./SideBar/SideBar";
import Player from "@/components/Player";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";

export interface IAppProps {
  children: React.ReactNode;
}

export default function App({ children  }: IAppProps) {
  const player = usePlayer()

  

  return (
      <div className={`h-[100vh]  overflow-hidden rounded-lg   flex gap-2 ${player.activeId && 'h-[calc(100vh-90px)] '} `}>
      
        <div className="h-full w-full  flex-1 rounded-lg overflow-auto  bg-neutral-900 ">
          {children}
        </div>
      </div>
    
  );
}
