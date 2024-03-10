import * as React from 'react';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='flex gap-2'>
    <button className='p-1 px-3 font-bold  rounded-full hover:opacity-80 transition-all'>
      Sign up
    </button>
    <button className='p-1 px-3 bg-[white] font-bold text-[#111] rounded-full hover:opacity-80 transition-all'>
      Sign in
    </button>
  </div>
  );
}
