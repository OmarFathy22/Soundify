import * as React from 'react';
import { VscLibrary } from "react-icons/vsc";
import IconBox from './IconBox';
import { FaPlus } from "react-icons/fa6";

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='bg-neutral-900 rounded-lg  p-5 flex-1'>
      <div className='flex items-center justify-between'>
      <IconBox href='/' active={false} icon={<VscLibrary size={25} />} name="Library" />
       <FaPlus className='text-neutral-500 hover:text-white transition-all cursor-pointer'/>
      </div>
    </div>
  );
}
