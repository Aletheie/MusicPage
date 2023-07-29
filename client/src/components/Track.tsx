import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  author: string;
  songName: string;
}

const Track = ({ songName, author }: Props) => {
  const [isFilledHeart, setIsFilledHeart] = useState(false);

  const handleClick = () => {
    setIsFilledHeart(!isFilledHeart);
  };

  return (
    <div className="w-4/5 md:w-8/12 mt-6 md:mt-4 h-16 rounded-xl bg-[#ededed] hover:bg-[#e7e7e7] flex items-center">
      <div className="bg-[#f4f4f4] w-12 h-12 rounded-lg ml-2"></div>
      <div className=" text-sm ml-4">
        <p className="text-black font-semibold">{songName}</p>
        <p className="text-gray-700 font-medium">{author}</p>
      </div>
      <div className="ml-auto mr-5">
        <button onClick={handleClick}>
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
