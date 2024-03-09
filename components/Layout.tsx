import * as React from 'react';
import SideBar from './SideBar/SideBar';

export interface IAppProps {
  children: React.ReactNode
}

export default function App ({children}: IAppProps) {
  return (
    <div className='h-[100vh] flex gap-2 p-2'>
    <SideBar />
    <div className='h-full w-full  flex-1 rounded-lg  bg-neutral-900 '>
      {children}
    </div>
  </div>
  );
}
