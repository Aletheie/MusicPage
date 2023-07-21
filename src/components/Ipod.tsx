import ipod from "../assets/gummy-ipod.svg";
import "../index.css";

const Ipod = () => {
  return (
    <img
      src={ipod}
      alt="ipod"
      className="w-2/3 md:w-3/5 absolute -left-10 md:left-35 floating"
    />
  );
};

export default Ipod;
