import ipod from "../assets/gummy-ipod.svg";
import "../index.css";

const Ipod = () => {
  return (
    <img
      src={ipod}
      alt="ipod"
      className="hidden md:block w-2/3 md:w-3/5 absolute -left-5 md:left-35 md:bottom-32 lg:bottom-0 lg:top-5 floating md:"
    />
  );
};

export default Ipod;
