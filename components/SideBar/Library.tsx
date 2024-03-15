"use client"
import * as React from 'react';
import { VscLibrary } from "react-icons/vsc";
import IconBox from './IconBox';
import { FaPlus } from "react-icons/fa6";
import useAuthModal from '@/hooks/useAuthModal';
import AuthModal from '../AuthModal';
import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';
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
    <div className='bg-neutral-900 rounded-lg overflow-auto   flex-1  '>
      <div className='flex items-center bg-neutral-900  sticky p-5 pb-0 top-0 left-0 right-0 justify-between'>

      <div className={`flex items-center  w-fit transition-all gap-3 hover:font-bold hover:text-white `}>
      <h1 className="-translate-y-[1px] ">{<VscLibrary size={25} />}</h1>
      <h1 className="font-medium">{"Library"}</h1>
    </div>
      <button  onClick={onClick}>
         <FaPlus className='text-neutral-500 hover:text-white transition-all cursor-pointer'/>
      </button>

      </div>

        <div className='px-5 '>
          {
            userSongs?.length === 0 ? (
              <h1 className='text-neutral-400 mt-2'>No songs</h1>
            ):
            (
              userSongs?.map((song) => (
                <div key={song.id} className='my-3'>
                  <UserSongsCard
                    song={song}
                    songs={userSongs}
                  />
                </div>
              ))
            )
          }
        </div>
    </div>
  );
}
