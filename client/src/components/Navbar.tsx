import Link from "./Link";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import {
  FaLayerGroup,
  FaHeadphonesAlt,
  FaUserPlus,
  FaUserMinus,
} from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import Player from "./Player";
import { useEffect, useState } from "react";
import axios from "axios";

const linksData = [
  {
    icon: <AiFillHome className="text-3xl fill-gray-600" />,
    text: "Home",
    path: "/",
  },
  {
    icon: <MdAddBox className="text-3xl fill-gray-600" />,
    text: "Add",
    path: "/songs/add",
  },
  {
    icon: <FaLayerGroup className="text-2xl fill-gray-600 ml-0.5" />,
    text: "Songs",

    path: "/songs",
  },
  {
    icon: <AiFillHeart className="text-3xl fill-gray-600" />,
    text: "Hearts",

    path: "/songs/heart",
  },
  {
    icon: <FaHeadphonesAlt className="text-3xl fill-gray-600" />,
    text: "Lofi",
    path: "/",
  },
];

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    axios
      .post("http://localhost:8080/api/login/auth", "hii", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data === true) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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
      {!isLogged ? (
        <Link
          icon={<FaUserPlus className="text-3xl fill-gray-600" />}
          text="Login"
          divParams="mb-9"
          path="/login"
        />
      ) : (
        <Link
          icon={<FaUserMinus className="text-3xl fill-gray-600" />}
          text="Logout"
          divParams="mb-9"
          path="/logout"
        />
      )}
    </div>
  );
};

export default Navbar;
