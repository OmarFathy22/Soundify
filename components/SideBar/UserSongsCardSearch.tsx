'use client'
import useLoadImage from '@/hooks/useLoadImage';
import Image from 'next/image';
import * as React from 'react';
import { FaPlay } from "react-icons/fa";
import LikedButton from '../LikedButton';



export interface IAppProps {
  songId:string,
  title:string,
  author:string,
  image_path:string,
  song_path:string
}


export default function App ({songId , title , author , image_path , song_path}: IAppProps) {
  const imageUrl = useLoadImage(image_path);
  return (
    <div className='flex items-center group px-2 py-2 hover:bg-neutral-800  gap-4 rounded-md'>
      <div className='h-[44px] w-[44px]'>
        <Image className='rounded-sm w-full h-full object-cover' src={`${imageUrl}`} alt="music" width={44} height={44} />
      </div>
      <div className='flex items-center flex-1 justify-between'>
        <div>
        <h1 className='font-medium text-[15px] truncate'>{title}</h1>
        <h1 className='text-neutral-300 text-[13px] truncate'>{author}</h1>
        </div>
        <LikedButton songId={songId}/>
        {/* <button>
          <FaPlay className='text-white opacity-0 group-hover:opacity-100'/>
        </button> */}
      </div>
    </div>
  );
}
