import Banner from "./Banner";
import Ipod from "./Ipod";

const MainContent = () => {
  return (
    <div className="w-full col-span-10 bg-[#f4f4f4] rounded-l-3xl grid grid-cols-12">
      <Banner />
      <Ipod />
    </div>
  );
};

export default MainContent;
