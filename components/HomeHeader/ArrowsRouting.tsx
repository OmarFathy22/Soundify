import * as React from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='flex gap-2'>
      <button className='p-1 bg-[#111] rounded-full hover:opacity-80 transition-all'>
        <MdKeyboardArrowLeft size={30}/>
      </button>
      <button className='p-1 bg-[#111] rounded-full hover:opacity-80 transition-all'>
        <MdKeyboardArrowRight size={30}/>
      </button>
    </div>
  );
}
