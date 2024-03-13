"use client"
import * as React from 'react';
import { VscLibrary } from "react-icons/vsc";
import IconBox from './IconBox';
import { FaPlus } from "react-icons/fa6";
import useAuthModal from '@/hooks/useAuthModal';
import AuthModal from '../AuthModal';
import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';
import getSongsByUserId from '@/actions/getSongsByUserId';
import { Song } from '@/types';
import useLoadImage from '@/hooks/useLoadImage';
import UserSongsCard from './UserSongsCardLibrary'


export interface IAppProps {
  userSongs: Song[]
}

export const revalidate = 0;
export default  function App ({userSongs}: IAppProps) {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  
  const {user} = useUser();
   const onClick = () => {
     if(!user) {
       return authModal.onOpen();
     }
     // handle upload
     return uploadModal.onOpen();
   }
  return (
    <div className='bg-neutral-900 rounded-lg  p-5 flex-1'>
      <div className='flex items-center justify-between'>
      <IconBox href='/' active={false} icon={<VscLibrary size={25} />} name="Library" />
      <button  onClick={onClick}>
         <FaPlus className='text-neutral-500 hover:text-white transition-all cursor-pointer'/>
      </button>
      </div>

      {
        userSongs.length === 0 ? (
          <h1>No songs</h1>
        ):
        (
          userSongs.map((song) => (
            <div key={song.id} className='my-3'>
              <UserSongsCard
                songId={song.id}
                title={song.title}
                author={song.author}
                image_path={song.image_path}
                song_path={song.song_path}
              />
            </div>
          ))
        )
      }
    </div>
  );
}
