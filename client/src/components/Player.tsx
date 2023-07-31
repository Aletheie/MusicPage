import useMusicStore from "../stores/musicStore";

const Player = () => {
  const { song } = useMusicStore((s) => ({ song: s.song }));
  return (
    <div className="text-sm flex flex-col items-center mt-9">
      <div className="w-44 h-44 bg-[#f4f4f4] rounded-2xl"></div>
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
