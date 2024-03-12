import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Song } from "@/types";

const useLoadSongUrl = (song_path:string) => {
  const supabaseClient = useSupabaseClient();

  if (!song_path) {
    return '';
  }

  const { data: songData } = supabaseClient
  .storage
  .from('songs')
  .getPublicUrl(song_path);

  return songData.publicUrl;
};

export default useLoadSongUrl;