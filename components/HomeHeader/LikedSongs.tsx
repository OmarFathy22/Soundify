import Image from 'next/image';
import * as React from 'react';
import { FaPlay } from "react-icons/fa";


export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='flex items-center group overflow-hidden cursor-pointer    hover:bg-emerald-100/40 transition-all bg-emerald-100/30 rounded-lg max-w-[300px] '>
      <div className=''>
        <Image className='h-[64px] w-[64px]'  src="/liked.png" alt="liked" width={200} height={200}/>
      </div>
      <div className='flex  items-center justify-between px-4 flex-1'>
      <h1>
        Liked Songs
      </h1>
      <button className='p-4 hidden hover:scale-110 group-hover:block bg-green-500 transition-all rounded-full'>
        <FaPlay className='text-[#111]'/>
      </button>
      </div>
    </div>
  );
}
