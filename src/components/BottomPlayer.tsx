import player from "../assets/PlayerButton.svg";
import playerR from "../assets/PlayerR.svg";
import playerL from "../assets/PlayerL.svg";

const BottomPlayer = () => {
  return (
    <div className="w-11/12  mx-auto mt-20 h-16 rounded-xl bg-[#ededed] flex  justify-center items-center gap-3">
      <img src={playerL} alt="player left" className="h-4" />
      <img src={player} alt="player" className="h-9" />
      <img src={playerR} alt="player right" className="h-4" />
    </div>
  );
};

export default BottomPlayer;
