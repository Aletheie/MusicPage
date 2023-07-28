import axios from "axios";
import { useEffect, useState } from "react";
import Track from "../components/Track";

interface SongType {
  songName: string;
  songAuthor: string;
  songFile: {
    name: string;
    type: string;
  };
}

const Songs = () => {
  const [songList, setSongList] = useState([] as SongType[]);

  useEffect(() => {
    axios
      .post<SongType[]>("http://localhost:8080/songs", "hii", {
        withCredentials: true,
      })
      .then((res) => {
        setSongList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full h-screen col-span-12 lg:col-span-10 bg-[#f4f4f4] rounded-l-3xl shadow-md overflow-hidden flex justify-center flex-col">
      {songList.map((song, idx) => (
        <Track key={idx} songName={song.songName} author={song.songAuthor} />
      ))}
    </div>
  );
};

export default Songs;
