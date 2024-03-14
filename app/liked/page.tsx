import Image from "next/image";

import getLikedSongs from "@/actions/getLikedSongs";
import Layout from "../../components/Layout";
import AuthButtons from "@/components/HomeHeader/AuthButtons";
import Title from "@/components/HomeHeader/Title";
import ArrowRouter from "@/components/HomeHeader/ArrowsRouting";
import LikedSongsContent from "./components/LikedSongsContent";
// import Header from "@/components/Header";

// import LikedContent from "./components/LikedContent";

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <Layout>
      <div className="bg-gradient-to-b from-emerald-700 p-5 rounded-t-lg ">
        <div className="flex justify-between">
          <ArrowRouter />
          <AuthButtons />
        </div>

        <div className="flex xs:flex-col items-center gap-3 mt-10">
          <div className="h-[84px] w-[84px]">
            <Image src="/liked.png" alt="liked" width={200} height={200} />
          </div>
          <div>
            <p className="text-neutral-400 xs:text-center">playlist</p>
            <h1 className="text-4xl font-bold xs:text-center">
              Favorite Songs
            </h1>
          </div>
        </div>
      </div>
      <LikedSongsContent songs={songs} />
    </Layout>
  );
};

export default Liked;
