import heart from "../assets/heart.svg";

const Track = () => {
  return (
    <div className="w-8/12 mt-4 h-16 rounded-xl bg-[#ededed] flex items-center">
      <div className="bg-[#f4f4f4] w-12 h-12 rounded-lg ml-2"></div>
      <div className=" text-sm ml-4">
        <p>Young And Beautiful</p>
        <p className="text-gray-700 font-medium">Lana Del Rey</p>
      </div>
      <img className="ml-24" src={heart} alt="heart" />
    </div>
  );
};

export default Track;
