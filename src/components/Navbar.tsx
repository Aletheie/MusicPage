import Link from "./Link";
import home from "../assets/home.svg";
import layer from "../assets/Layers_fill.svg";
import add from "../assets/Chat_plus_fill.svg";
import headphone from "../assets/Headphones_fill.svg";
import login from "../assets/Sign_in_squre_fill.svg";
import Player from "./Player";

const linksData = [
  { icon: home, text: "Home", textColor: "text-black", path: "/" },
  {
    icon: layer,
    text: "Albums",
    textColor: "text-gray-700",
    path: "/albums",
  },
  { icon: add, text: "Add", textColor: "text-gray-700", path: "/" },
  {
    icon: headphone,
    text: "Lana Del Rey",
    textColor: "text-gray-700",
    path: "/",
  },
  { icon: headphone, text: "Lofi", textColor: "text-gray-700", path: "/" },
];

const Navbar = () => {
  return (
    <div className="w-full col-span-2 bg-[#ededed flex flex-col justify-between">
      <div>
        {linksData.map((link, index) => (
          <Link
            key={index}
            icon={link.icon}
            text={link.text}
            textColor={link.textColor}
            path={link.path}
          />
        ))}
      </div>
      <Player />
      <Link
        icon={login}
        text="Login"
        textColor="text-black"
        divParams="mb-7"
        path="/"
      />
    </div>
  );
};

export default Navbar;
