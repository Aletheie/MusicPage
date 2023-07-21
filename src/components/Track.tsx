import heart from "../assets/heart.svg";

interface Props {
  author: string;
  songName: string;
}

const Track = ({ songName, author }: Props) => {
  return (
    <div className="w-4/5 md:w-8/12 mt-6 md:mt-4 h-16 rounded-xl bg-[#ededed] flex items-center">
      <div className="bg-[#f4f4f4] w-12 h-12 rounded-lg ml-2"></div>
      <div className=" text-sm ml-4">
        <p>{songName}</p>
        <p className="text-gray-700 font-medium">{author}</p>
      </div>
      <div className="ml-auto mr-5">
        <img src={heart} alt="heart" />
      </div>
    </div>
  );
};

export default Track;
