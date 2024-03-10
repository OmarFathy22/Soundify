import * as React from "react";
import MainRoutes from "./MainRoutes";
import Library from "./Library";

export interface IAppProps {
  children?: React.ReactNode;
}

export default function App(props: IAppProps) {
  return (
    <div className=" rounded-lg flex flex-col gap-2  overflow-hidden  h-full max_900:hidden !w-[300px] ">
      <MainRoutes />
      <Library />
    </div>
  );
}
