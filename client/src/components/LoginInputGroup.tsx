import { useState } from "react";
import "../index.css";
import TextInput from "./TextInput";
import axios from "axios";

interface Props {
  icon: string;
  buttonText: string;
  oneMoreInput?: boolean;
}

const LoginInputGroup = ({ icon, buttonText, oneMoreInput }: Props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/user", {
      username: username,
      email: email,
      password: password,
    });
    setUsername("");
    setEmail("");
    setPassword("");

    console.log(username, email, password);
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
            {oneMoreInput && (
              <TextInput
                placeholder="Username"
                type="text"
                setInputText={setUsername}
                inputText={username}
              />
            )}
            <TextInput
              placeholder="Email"
              type="email"
              setInputText={setEmail}
              inputText={email}
            />
            <TextInput
              placeholder="Password"
              type="password"
              setInputText={setPassword}
              inputText={password}
            />
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
