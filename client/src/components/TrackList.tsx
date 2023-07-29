import Track from "./Track";

const song = {
  songName: "Young and beautiful",
  songAuthor: "Lana Del Rey",
  songFile: {
    path: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    name: "SoundHelix-Song-1.mp3",
    type: "audio/mpeg",
  },
};

const TrackList = () => {
  return (
    <div className=" text-left mx-10 md:ml-[55%] mt-16 font-bold text-3xl w-full md:w-[60%] lg:w-[45%] ">
      <p className="">Top Tracks</p>
      <Track song={song} />
      <Track song={song} />
    </div>
  );
};

export default TrackList;
