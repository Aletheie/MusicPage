import { NavLink } from "react-router-dom";

interface Props {
  icon: string;
  text: string;
  divParams?: string;
  path: string;
}

const Link = ({ icon, text, divParams, path }: Props) => {
  return (
    <NavLink
      to={path}
      className={`flex flex-row items-end mt-9 ms-6 font-semibold text-gray-700 aria-[current=page]:text-black ${
        divParams ? divParams : ""
      }`}
    >
      <img src={icon} alt="svgIcon" />
      <p className={`ms-3`}>{text}</p>
    </NavLink>
  );
};

export default Link;
