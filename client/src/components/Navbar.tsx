import Link from "./Link";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { BiAddToQueue, BiLogIn } from "react-icons/bi";
import { FaLayerGroup, FaHeadphonesAlt } from "react-icons/fa";
import Player from "./Player";

const linksData = [
  { icon: <AiFillHome className="text-2xl" />, text: "Home", path: "/" },
  {
    icon: <BiAddToQueue className="text-2xl" />,
    text: "Add",
    path: "/songs/add",
  },
  {
    icon: <FaLayerGroup className="text-xl fill-gray-700" />,
    text: "Songs",

    path: "/songs",
  },
  {
    icon: <AiFillHeart className="text-2xl" />,
    text: "Heart",

    path: "/songs/heart",
  },
  { icon: <FaHeadphonesAlt className="text-2xl" />, text: "Lofi", path: "/" },
];

const Navbar = () => {
  return (
    <div className="w-full hidden lg:visible lg:col-span-2 bg-[#ededed] lg:flex flex-col justify-between">
      <div>
        {linksData.map((link, index) => (
          <Link
            key={index}
            icon={link.icon}
            text={link.text}
            path={link.path}
          />
        ))}
      </div>
      <Player />
      <Link
        icon={<BiLogIn className="text-2xl" />}
        text="Login"
        divParams="mb-7"
        path="/login"
      />
    </div>
  );
};

export default Navbar;
