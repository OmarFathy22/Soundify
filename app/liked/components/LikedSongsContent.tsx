"use client"

import { useUser } from '@/hooks/useUser';
import { Song } from '@/types';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export interface IAppProps {
  songs: Song[]
}

export default function App ({songs}: IAppProps) {
  const router = useRouter();
  const {isLoading , user} = useUser();

  React.useEffect(() => {
    if(!isLoading && !user){
      router.replace('/');
    }
  } , [isLoading , user , router]);

  if(songs?.length === 0){
    return (
      <div className='text-neutral-400'>No songs found</div>
    )
  }
  return (
    <div className='px-5'>
      favorite songs
    </div>
  );
}
