import "../index.css";

const Banner = () => {
  return (
    <div className="col-span-12 mx-auto w-11/12 h-2/5 md:h-1/5 lg:h-2/5 bg-gradient-to-br from-fuchsia-900 via-violet-500 to-indigo-300 mt-10 rounded-3xl drop-shadow-sm flex justify-end md:justify-center lg:justify-end items-center flex-wrap md:flex-nowrap lg:flex-wrap">
      <h1 className="drop-shadow-md pr-80 md:pr-0 lg:pr-20 md:text-center lg:text-right text-white text-7xl md:text-6xl lg:text-7xl font-extrabold w-1/3 md:w-[100%] lg:w-1/3 leading-tight">
        Upload Your Album
      </h1>
    </div>
  );
};

export default Banner;
