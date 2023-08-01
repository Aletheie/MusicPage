import {
  AiFillPlayCircle,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillPauseCircle,
} from "react-icons/ai";
import { useState } from "react";
import useSound from "use-sound";
import useMusicStore from "../stores/musicStore";

const BottomPlayer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null as string | null);
  const { isGlobalPlaying, song, setSong, setIsGlobalPlaying, globalSongList } =
    useMusicStore((s) => ({
      isGlobalPlaying: s.isGlobalPlaying,
      song: s.song,
      setIsGlobalPlaying: s.setIsGlobalPlaying,
      globalSongList: s.globalSongList,
      setSong: s.setSong,
    }));
  const [play, { pause }] = useSound(song.songFile.path);

  const getRandomSong = () => {
    if (!globalSongList.length) return song;
    const randomSong =
      globalSongList[Math.floor(Math.random() * globalSongList.length)];
    return randomSong;
  };

  const handleMouseOver = (iconName: string | null) => {
    setHoveredIcon(iconName);
  };

  const handleMouseOut = () => {
    setHoveredIcon(null);
  };

  const handleClick = async () => {
    if (isGlobalPlaying) await pause();
    else await play();
    setIsGlobalPlaying();
  };

  const playSong = async () => {
    if (isGlobalPlaying) await pause();
    const randomSong = getRandomSong();
    setSong(randomSong);
    console.log(randomSong || "No song name found");
  };

  return (
    <div className="w-11/12 absolute bottom-7 left-0 right-0 m-auto h-16 rounded-xl bg-[#ededed] flex justify-center items-center gap-3 text-[#4A4A4A]">
      <AiFillCaretLeft
        onMouseOver={() => handleMouseOver("caretLeft")}
        onMouseOut={handleMouseOut}
        onClick={playSong}
        className={`h-4 cursor-pointer ${
          hoveredIcon === "caretLeft" ? "text-black" : ""
        }`}
      />
      {isGlobalPlaying ? (
        <AiFillPauseCircle
          size={60}
          onMouseOver={() => handleMouseOver("pause")}
          onMouseOut={handleMouseOut}
          onClick={handleClick}
          className={`h-9 cursor-pointer ${
            hoveredIcon === "pause" ? "text-black" : ""
          }`}
        />
      ) : (
        <AiFillPlayCircle
          size={60}
          onMouseOver={() => handleMouseOver("play")}
          onMouseOut={handleMouseOut}
          onClick={handleClick}
          className={`h-9 cursor-pointer ${
            hoveredIcon === "play" ? "text-black" : ""
          }`}
        />
      )}
      <AiFillCaretRight
        onMouseOver={() => handleMouseOver("caretRight")}
        onMouseOut={handleMouseOut}
        onClick={playSong}
        className={`h-4 cursor-pointer ${
          hoveredIcon === "caretRight" ? "text-black" : ""
        }`}
      />
    </div>
  );
};

export default BottomPlayer;
