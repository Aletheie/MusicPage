import Track from "./Track";

const TrackList = () => {
  return (
    <div className=" text-left mx-10 md:ml-[55%] mt-16 font-bold text-3xl w-full md:w-[60%] lg:w-[45%] ">
      <p className="">Top Tracks</p>
      <Track songName="Young and beautiful" author="Lana Del Rey" />
      <Track songName="Radio" author="Lana Del Rey" />
    </div>
  );
};

export default TrackList;
