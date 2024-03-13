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
          <SongCard key={song?.id} songId={song?.id} title={song?.title} author={song?.author} image_path={song?.image_path} song_path={song?.song_path}/>
        ))
       }
      
    </div>
  );
}

export default SearchContent