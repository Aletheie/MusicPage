import Link from "./Link";
import home from "../assets/home.svg";
import layer from "../assets/Layers_fill.svg";
import add from "../assets/Chat_plus_fill.svg";
import headphone from "../assets/Headphones_fill.svg";
import login from "../assets/Sign_in_squre_fill.svg";
import Player from "./Player";

const linksData = [
  { icon: home, text: "Home", path: "/" },
  {
    icon: layer,
    text: "Albums",

    path: "/albums",
  },
  { icon: add, text: "Add", path: "/songs/add" },
  {
    icon: headphone,
    text: "Lana Del Rey",

    path: "/albums/lana-del-rey",
  },
  { icon: headphone, text: "Lofi", path: "/" },
];

const Navbar = () => {
  return (
    <div className="w-full col-span-2 bg-[#ededed] flex flex-col justify-between">
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
      <Link icon={login} text="Login" divParams="mb-7" path="/login" />
    </div>
  );
};

export default Navbar;
