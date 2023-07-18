interface Props {
  icon: string;
  text: string;
}

const Link = ({ icon, text }: Props) => {
  return (
    <div className="flex flex-row items-end mt-5 ms-6 font-semibold">
      <img src={icon} alt="svgIcon" />
      <p className="ms-3">{text}</p>
    </div>
  );
};

export default Link;
