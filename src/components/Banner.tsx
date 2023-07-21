import "../index.css";

const Banner = () => {
  return (
    <div className="col-span-12 mx-auto w-11/12 h-2/5 bg-gradient-to-br from-fuchsia-900 via-violet-500 to-indigo-300 mt-10 rounded-3xl drop-shadow-sm flex justify-end items-center flex-wrap ">
      <h1 className="drop-shadow-md pr-80 lg:pr-20 text-end text-white text-7xl font-extrabold w-1/3 leading-tight">
        Upload Your Album
      </h1>
    </div>
  );
};

export default Banner;
