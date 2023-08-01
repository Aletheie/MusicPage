import { ScaleLoader } from "react-spinners";
import useMusicStore from "../stores/musicStore";

const Player = () => {
  const { song } = useMusicStore((s) => ({ song: s.song }));
  const { isGlobalPlaying } = useMusicStore((s) => ({
    isGlobalPlaying: s.isGlobalPlaying,
  }));
  return (
    <div className="text-sm flex flex-col items-center mt-9">
      <div className="w-44 h-44 bg-[#f4f4f4] rounded-2xl flex justify-center items-center">
        {isGlobalPlaying && <ScaleLoader color="#4b5563" />}
      </div>
      <p className="font-bold mt-3">
        {song.songName.length ? song.songName : "No Song is playing"}
      </p>
      <p className="text-gray-700 font-medium">
        {song.songAuthor.length ? song.songAuthor : " - "}
      </p>
    </div>
  );
};

export default Player;
