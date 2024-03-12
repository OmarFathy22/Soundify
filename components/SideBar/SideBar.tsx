import * as React from "react";
import MainRoutes from "./MainRoutes";
import Library from "./Library";
import getSongsByUserId from "@/actions/getSongsByUserId";

export interface IAppProps {
  children?: React.ReactNode;
}

export default async function App(props: IAppProps) {
  const userSongs = await getSongsByUserId()
  return (
    <div className=" rounded-lg flex flex-col gap-2  overflow-hidden  h-full max_900:hidden !w-[300px] ">
      <MainRoutes />
      <Library userSongs={userSongs} />
    </div>
  );
}
