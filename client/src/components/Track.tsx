import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { SongType } from "../utils/SongType";
import useSound from "use-sound";

interface Props {
  song: SongType;
}

const Track = ({ song }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFilledHeart, setIsFilledHeart] = useState(false);
  const [play, { pause }] = useSound(song.songFile.path);

  const handlePlayPauseClick = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const handleHeartClick = () => {
    setIsFilledHeart(!isFilledHeart);
    // axios
    //   .post(
    //     "http://localhost:8080/songs/heart",
    //     {
    //       songId: song._id,
    //       isFilledHeart: !isFilledHeart,
    //     },
    //     { withCredentials: true }
    //   )
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className=" cursor-pointer w-4/5 md:w-8/12 mt-6 md:mt-4 h-16 rounded-xl bg-[#ededed] hover:bg-[#e7e7e7] flex items-center">
      <div className="bg-[#f4f4f4] w-12 h-12 rounded-lg ml-2 flex justify-center items-center">
        {isPlaying ? (
          <BsFillPauseFill
            className="text-4xl text-[#ededed] hover:text-[#e7e7e7]"
            onClick={handlePlayPauseClick}
          />
        ) : (
          <BsFillPlayFill
            className="text-4xl text-[#ededed] hover:text-[#e7e7e7]"
            onClick={handlePlayPauseClick}
          />
        )}
      </div>
      <div className=" text-sm ml-4">
        <p className="text-black font-semibold">{song.songName}</p>
        <p className="text-gray-700 font-medium">{song.songAuthor}</p>
      </div>
      <div className="ml-auto mr-5">
        <button onClick={handleHeartClick}>
          {isFilledHeart ? (
            <AiFillHeart className="text-2xl text-gray-700" />
          ) : (
            <AiOutlineHeart className="text-2xl text-gray-700" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Track;
