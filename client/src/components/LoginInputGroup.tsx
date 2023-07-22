import login from "../assets/icons8-login-64.png";
import "../index.css";
import TextInput from "./TextInput";

const LoginInputGroup = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <form
      action=""
      className="flex justify-center w-full h-screen items-center relative"
    >
      <div className="w-3/4 md:w-1/2 lg:w-1/3 h-2/5 rounded-3xl shadow-xl bg-[#f4f4f4]">
        <div className="w-full bg-gradient-to-br from-fuchsia-900 via-violet-500 to-indigo-300 h-1/4  rounded-t-3xl"></div>
        <img src={login} alt="cd image" className="floating mx-auto -mt-10" />
        <div className="mt-8">
          <TextInput placeholder="Email" type="email" />
          <TextInput placeholder="Password" type="password" />
        </div>
        <button
          onSubmit={handleFormSubmit}
          className="w-3/4 md:w-1/2 lg:w-1/3 bg-[#ededed] hover:bg-[#eaeaea] h-[8%] rounded-b-3xl absolute bottom-60 lg:bottom-56"
        >
          <span className="font-semibold text-gray-500">Submit</span>
        </button>
      </div>
    </form>
  );
};

export default LoginInputGroup;
