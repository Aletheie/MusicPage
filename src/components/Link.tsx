interface Props {
  icon: string;
  text: string;
  textColor: string;
  divParams?: string;
  path: string;
}

const Link = ({ icon, text, textColor, divParams, path }: Props) => {
  return (
    <a
      href={path}
      className={`flex flex-row items-end mt-9 ms-6 font-semibold ${
        divParams ? divParams : ""
      }`}
    >
      <img src={icon} alt="svgIcon" />
      <p className={`ms-3 ${textColor}`}>{text}</p>
    </a>
  );
};

export default Link;
