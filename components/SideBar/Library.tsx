import * as React from 'react';
import { VscLibrary } from "react-icons/vsc";
import IconBox from './IconBox';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='bg-neutral-900 rounded-lg p-5 flex-1'>
      <IconBox href='/' active={false} icon={<VscLibrary size={25} />} name="Library" />
    </div>
  );
}
