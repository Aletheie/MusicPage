import service from "../assets/icons8-services-256.png";
import "../index.css";

const ErrorPage = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 pb-12 lg:pb-0">
        <div className="mx-12 md:mx-10 lg:mx-16">
          <h1 className=" text-gray-800 font-bold text-2xl">
            Looks like you've found the doorway to the great nothing
          </h1>
          <p className="text-gray-800 ">
            Sorry about that! Please visit our hompage to get where you need to
            go.
          </p>
          <button
            onClick={handleClick}
            className="sm:w-full lg:w-auto my-2 border rounded-3xl mt-3 py-3 px-6 text-center bg-violet-500 text-white hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
          >
            Take me there!
          </button>
        </div>
      </div>
      <img src={service} className="floating" />
    </div>
  );
};

export default ErrorPage;
