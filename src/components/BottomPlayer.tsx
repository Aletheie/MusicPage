/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  AiFillPlayCircle,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { useState } from "react";
import useSound from "use-sound";
import useMusicStore from "../stores/musicStore";

import music from "../assets/music/fairytale.mp3";

const BottomPlayer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [play, { pause }] = useSound(music);
  const { isPlaying, setIsPlaying } = useMusicStore();

  const handleMouseOver = (iconName: string | null) => {
    setHoveredIcon(iconName);
  };

  const handleMouseOut = () => {
    setHoveredIcon(null);
  };

  const handleClick = () => {
    if (isPlaying) pause();
    else play();
    setIsPlaying();
  };

  return (
    <div className="w-11/12 mt-24 mx-auto h-16 rounded-xl bg-[#ededed] flex justify-center items-center gap-3 text-[#4A4A4A]">
      <AiFillCaretLeft
        onMouseOver={() => handleMouseOver("caretLeft")}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        className={`h-4 cursor-pointer ${
          hoveredIcon === "caretLeft" ? "text-black" : ""
        }`}
      />
      <AiFillPlayCircle
        size={60}
        onMouseOver={() => handleMouseOver("play")}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        className={`h-9 cursor-pointer ${
          hoveredIcon === "play" ? "text-black" : ""
        }`}
      />
      <AiFillCaretRight
        onMouseOver={() => handleMouseOver("caretRight")}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        className={`h-4 cursor-pointer ${
          hoveredIcon === "caretRight" ? "text-black" : ""
        }`}
      />
    </div>
  );
};

export default BottomPlayer;
