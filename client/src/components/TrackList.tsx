import { useEffect, useState } from "react";
import Track from "./Track";
import { SongType } from "../utils/SongType";
import axios from "axios";

const TrackList = () => {
  const [songList, setSongList] = useState<SongType[]>([]);

  useEffect(() => {
    axios
      .post<SongType[]>("http://localhost:8080/songs", "hii", {
        withCredentials: true,
      })
      .then((res) => setSongList(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" text-left mx-10 md:ml-[55%] mt-16 font-bold text-3xl w-full md:w-[60%] lg:w-[45%] ">
      <p className="">Top Tracks</p>
      <Track song={songList[0]} />
      <Track song={songList[1]} />
    </div>
  );
};

export default TrackList;
