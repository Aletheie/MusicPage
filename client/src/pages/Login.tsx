import LoginInputGroup from "../components/LoginInputGroup";
import login from "../assets/icons8-login-64.png";
import signup from "../assets/icons8-access-64.png";

const Login = () => {
  return (
    <div className="w-full h-screen col-span-12 lg:col-span-10 bg-[#f4f4f4] rounded-l-3xl shadow-md overflow-hidden flex justify-center">
      <LoginInputGroup icon={login} buttonText="Login" />
      <LoginInputGroup icon={signup} buttonText="SignUp" />
    </div>
  );
};

export default Login;
