import * as React from 'react';

export interface IAppProps {
  text:string
}

export default function App ({text}: IAppProps) {
  return (
    <h1 className='mt-4 mb-2 px-5 font-bold text-[30px] '>
      {text}
    </h1>
  );
}
