import axios from "axios";
import { useEffect, useState } from "react";
import Track from "../components/Track";
import { SongType } from "../utils/SongType";
import { Link } from "react-router-dom";

const HeartPage = () => {
  const [songHeartList, setSongHeartList] = useState<SongType[]>([]);

  useEffect(() => {
    axios
      .post<SongType[]>("http://localhost:8080/songs/heart", "hii", {
        withCredentials: true,
      })
      .then((res) => setSongHeartList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-screen col-span-12 lg:col-span-10 bg-[#f4f4f4] rounded-l-3xl shadow-md overflow-hidden">
      <div className="w-2/3 h-screen mx-auto flex justify-center items-center flex-col">
        <h1 className="text-gray-700 font-bold text-5xl pb-5">
          All {"\u003C"}3 Songs
        </h1>
        {songHeartList.map((song, idx) => (
          <Track key={idx} song={song} />
        ))}
        {songHeartList.length === 0 && (
          <p className="text-gray-700 font-semibold text-2xl">
            No songs found. You can add them{" "}
            <Link to="/songs/add" className="text-blue-500">
              here
            </Link>
            .
          </p>
        )}
      </div>
    </div>
  );
};

export default HeartPage;
