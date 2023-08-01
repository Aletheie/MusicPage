import { useEffect, useState } from "react";
import Track from "./Track";
import { SongType } from "../utils/SongType";
import axios from "axios";
import { Link } from "react-router-dom";

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
      {songList.length > 1 ? (
        <>
          <Track song={songList[0]} />
          <Track song={songList[1]} />
        </>
      ) : songList.length === 1 ? (
        <>
          <Track song={songList[0]} />
        </>
      ) : (
        <p className="text-gray-700 font-semibold text-xl mt-5">
          No songs found. <br />
          You can add them{" "}
          <Link to="/songs/add" className="text-blue-500">
            here
          </Link>
        </p>
      )}
    </div>
  );
};

export default TrackList;
