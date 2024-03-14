"use client"
import { Song } from '@/types';
import * as React from 'react';
import SongCard from '../../../components/SideBar/UserSongsCardSearch'

export interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({
  songs
}) => {
  if(songs?.length === 0){
    return (
      <div>No songs found</div>
    )
  }
  return (
    <div className='my-3 px-5'>
       {songs?.map((song) => (
          <SongCard key={song?.id} songs= {songs} song={song}/>
        ))
       }
      
    </div>
  );
}

export default SearchContent