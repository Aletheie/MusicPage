import Track from "./Track";

const TrackList = () => {
  return (
    <div className=" text-left ml-[60%] mt-16 font-bold text-3xl w-[45%] ">
      <p className="">Top Tracks</p>
      <Track songName="Young and beautiful" author="Lana Del Rey" />
      <Track songName="Radio" author="Lana Del Rey" />
    </div>
  );
};

export default TrackList;
