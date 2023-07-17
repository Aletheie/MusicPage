import Banner from "./Banner";
import Ipod from "./Ipod";
import TrackList from "./TrackList";

const MainContent = () => {
  return (
    <div className="w-full col-span-10 bg-[#f4f4f4] rounded-l-3xl shadow-md overflow-hidden">
      <Banner />
      <div className="flex flex-col justify-center ">
        <Ipod />
      </div>
      <TrackList />
    </div>
  );
};

export default MainContent;
