import "../index.css";
import TextInput from "./TextInput";

interface Props {
  icon: string;
  buttonText: string;
  oneMoreInput?: boolean;
}

const LoginInputGroup = ({ icon, buttonText, oneMoreInput }: Props) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="w-full h-full lg:transform lg:transition lg:duration-700 lg:hover:scale-110">
      <form
        action=""
        className="flex flex-col lg:flex-row justify-center w-full h-full items-center relative"
      >
        <div className="w-3/4 md:w-1/2 lg:w-[55%] h-[80%] lg:h-[55%] rounded-3xl shadow-xl bg-[#f4f4f4]">
          <div className="w-full bg-gradient-to-br from-fuchsia-900 via-violet-500 to-indigo-300 h-1/4  rounded-t-3xl "></div>
          <img src={icon} alt="cd image" className="floating mx-auto -mt-10" />
          <div className="mt-5 lg:mt-8">
            {oneMoreInput && <TextInput placeholder="Username" type="text" />}
            <TextInput placeholder="Email" type="email" />
            <TextInput placeholder="Password" type="password" />
          </div>
          <button
            onSubmit={handleFormSubmit}
            className="w-3/4 md:w-1/2 lg:w-[55%] bg-[#ededed] hover:bg-[#eaeaea] h-[8%] rounded-b-3xl absolute bottom-10 lg:bottom-44"
          >
            <span className="font-semibold text-gray-500">{buttonText}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginInputGroup;
