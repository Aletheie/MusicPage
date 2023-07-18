/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import player from "../assets/PlayerButton.svg";
import playerBlack from "../assets/PlayerButtonBlack.svg";
import playerR from "../assets/PlayerR.svg";
import playerRBlack from "../assets/playerRBlack.svg";
import playerL from "../assets/PlayerL.svg";
import playerLBlack from "../assets/playerLBlack.svg";
import music from "../assets/music/fairytale.mp3";
import { useState } from "react";
import useSound from "use-sound";
import useMusicStore from "../stores/musicStore";

const BottomPlayer = () => {
  const [hover, setHover] = useState({
    playerLeft: playerL,
    player: player,
    playerRight: playerR,
  });
  const [play, { pause }] = useSound(music);
  const { isPlaying, setIsPlaying } = useMusicStore();

  const handleMouseOver = (key: string) => {
    setHover((prevHover) => ({
      ...prevHover,
      [key]:
        key === "player"
          ? playerBlack
          : key === "playerLeft"
          ? playerLBlack
          : playerRBlack,
    }));
  };

  const handleMouseOut = (key: string) => {
    setHover((prevHover) => ({
      ...prevHover,
      [key]:
        key === "player" ? player : key === "playerLeft" ? playerL : playerR,
    }));
  };

  const handleClick = () => {
    if (isPlaying) pause();
    else play();
    setIsPlaying();
  };

  return (
    <div className="w-11/12 mx-auto mt-24 h-16 rounded-xl bg-[#ededed] flex justify-center items-center gap-3">
      <img
        onMouseOver={() => handleMouseOver("playerLeft")}
        onMouseOut={() => handleMouseOut("playerLeft")}
        src={hover.playerLeft}
        alt="player left"
        className="h-4"
      />
      <img
        onMouseOver={() => handleMouseOver("player")}
        onMouseOut={() => handleMouseOut("player")}
        onClick={handleClick}
        src={hover.player}
        alt="player"
        className="h-9"
      />
      <img
        onMouseOver={() => handleMouseOver("playerRight")}
        onMouseOut={() => handleMouseOut("playerRight")}
        src={hover.playerRight}
        alt="player right"
        className="h-4"
      />
    </div>
  );
};

export default BottomPlayer;
