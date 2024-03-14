"use client"
import * as React from 'react';
import Image from 'next/image';
import { Song } from '@/types';
import useLoadImage from '@/hooks/useLoadImage';

export interface IAppProps {
  song:Song
}

export default function App ({song}: IAppProps) {
  const imageUrl = useLoadImage(song?.image_path);

  return (
    <div className='flex items-center gap-4'>
      <div className='h-[44px] w-[44px]'>
          <Image className='rounded-sm w-full h-full object-cover' src={`${imageUrl || '/song-placeholder.png'}`} alt="music" width={44} height={44} />
        </div>
        <div className='flex items-center gap-5 flex-1 justify-between'>
          <div>
          <h1 className='font-medium text-[15px] truncate'>{song?.title}</h1>
          <h1 className='text-neutral-300 text-[13px] truncate'>{song?.author}</h1>
          </div>
          {/* <button>
            <FaPlay className='text-white opacity-0 group-hover:opacity-100'/>
          </button> */}
        </div>
    </div>
  );
}
