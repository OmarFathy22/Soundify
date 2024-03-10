import * as React from 'react';
import ArrowRouter from './ArrowsRouting';
import AuthButtons from './AuthButtons'
import WelcomeText from './WelcomeText';
import LikedSongs from './LikedSongs';
export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className='bg-gradient-to-b from-emerald-700 p-5 rounded-t-lg '>
      <div className='flex justify-between'>
      <ArrowRouter/>
      <AuthButtons/>
      </div>

      <div>
      <WelcomeText/>
      </div>

      <div>
        <LikedSongs/>
      </div>

    </div>
  );
}
