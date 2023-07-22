import LoginInputGroup from "../components/LoginInputGroup";
import SignUpInputGroup from "../components/SignUpInputGroup";

const Login = () => {
  return (
    <div className="w-full h-screen col-span-12 lg:col-span-10 bg-[#f4f4f4] rounded-l-3xl shadow-md overflow-hidden flex justify-center">
      <LoginInputGroup />
      <SignUpInputGroup />
    </div>
  );
};

export default Login;
