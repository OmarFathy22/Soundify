'use client'
import useLoadImage from '@/hooks/useLoadImage';
import Image from 'next/image';
import * as React from 'react';
import { FaPlay } from "react-icons/fa";
import LikedButton from '../LikedButton';
import { Song } from '@/types';
import useOnPlay from '@/hooks/useOnPlay';



export interface IAppProps {
  song:Song
  songs:Song[]
}


export default function App ({song , songs}: IAppProps) {
  const imageUrl = useLoadImage(song?.image_path);
  const onPlay = useOnPlay(songs);
  return (
    <div onClick={() => onPlay(song?.id)} className=' cursor-pointer flex items-center group px-2 py-2 hover:bg-neutral-800  gap-4 rounded-md'>
      <div className='h-[44px] w-[44px]'>
        <Image className='rounded-sm w-full h-full object-cover' src={`${imageUrl}`} alt="music" width={44} height={44} />
      </div>
      <div className='flex items-center flex-1 justify-between'>
        <div>
        <h1 className='font-medium text-[15px] truncate'>{song?.title}</h1>
        <h1 className='text-neutral-300 text-[13px] truncate'>{song?.author}</h1>
        </div>
        {/* <LikedButton songId={songId}/> */}
        {/* <button >
          <FaPlay className='text-white opacity-0 group-hover:opacity-100'/>
        </button> */}
      </div>
    </div>
  );
}
