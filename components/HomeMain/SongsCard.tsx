import Image from 'next/image';
import * as React from 'react';
import { FaPlay } from "react-icons/fa";
export interface IAppProps {
  name:string,
  artist:string,
  img:string,
}

export default function App ({ name , artist , img}: IAppProps) {
  return (
    <div className='group bg-neutral-800 bg-opacity-60 hover:bg-opacity-100 transition-all cursor-pointer rounded-lg p-3  h-[250px]  w-[200px]'>
      <div className='relative h-[70%]'>
      <div className=' h-full rounded-lg overflow-hidden'>
        <Image className='w-full h-full object-cover' src={img} alt="music" width={150} height={200}/>
      </div>
      <button className='right-1 bottom-1 absolute translate-y-[10px] opacity-0 p-4 hover:scale-110 group-hover:opacity-100 group-hover:translate-y-0 bg-green-500 transition-all duration-300 rounded-full'>
        <FaPlay className='text-[#111]'/>
      </button>
      </div>
      <div className='py-3'>
      <h1 className='font-medium text-[15px]'>{name}</h1>
      <h1 className='text-neutral-300 text-[13px]'>{artist}</h1>
      </div>
    </div>
  );
}
