import Link from "./Link";
import home from "../assets/home.svg";
//import layer from "../assets/Layers_fill.svg";

const Navbar = () => {
  return (
    <div className="w-full col-span-2 bg-[#ededed]">
      <Link icon={home} text="Home" />
    </div>
  );
};

export default Navbar;
