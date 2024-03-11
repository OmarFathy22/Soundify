import * as React from "react";
import SongCard from "./SongsCard";
export interface IAppProps {}

export default function App(props: IAppProps) {
  const newestSongs = [
    {
      id: 1,
      name: "Hello",
      artist: "Adele",
      img: "/hello.jpg",
    },
    {
      id: 2,
      name: "Human",
      artist: "Rag'n'Bone Man",
      img: "/human.jpg",
    },
    {
      id: 3,
      name: "Someone like you",
      artist: "Adele",
      img: "/someonelikeyou.jpg",
    },
    {
      id: 4,
      name: "Unstoppable",
      artist: "Sia",
      img: "/unstoppable.png",
    },
    {
      id: 5,
      name: "Hello",
      artist: "Adele",
      img: "/hello.jpg",
    },
    {
      id: 6,
      name: "Human",
      artist: "Rag'n'Bone Man",
      img: "/human.jpg",
    },
    {
      id: 7,
      name: "Someone like you",
      artist: "Adele",
      img: "/someonelikeyou.jpg",
    },
    {
      id: 8,
      name: "Unstoppable",
      artist: "Sia",
      img: "/unstoppable.png",
    },
  ];
  return (
    <div className="p-5">
      <h1 className="font-bold text-[25px] mb-3">Newest songs</h1>
      <ul className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-4">
      {newestSongs.map((song) => (
        <li key={song.id}>
          <SongCard
            key={song.id}
            name={song.name}
            artist={song.artist}
            img={song.img}
          />
        </li>
      ))}
      </ul>
    </div>
  );
}