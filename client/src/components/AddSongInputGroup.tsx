import cd from "../assets/icons8-music-record-64.png";
import "../index.css";
import FileInput from "./FileInput";
import TextInput from "./TextInput";

const AddSongInputGroup = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="w-full h-screen transform transition duration-700 hover:scale-105">
      <form
        action=""
        className="flex justify-center w-full h-screen items-center relative"
      >
        <div className="w-3/4 md:w-1/2 lg:w-1/3  h-2/3 rounded-3xl shadow-xl bg-[#f4f4f4]">
          <div className="w-full bg-gradient-to-br from-fuchsia-900 via-violet-500 to-indigo-300 h-1/4  rounded-t-3xl"></div>
          <img src={cd} alt="cd image" className="floating mx-auto -mt-10" />
          <FileInput />
          <div className="mt-8">
            <TextInput placeholder="Song name" type="text" />
            <TextInput placeholder="Song author" type="text" />
          </div>
          <button
            onSubmit={handleFormSubmit}
            className="w-3/4 md:w-1/2 lg:w-1/3 bg-[#ededed] hover:bg-[#eaeaea] h-[8%] rounded-b-3xl absolute bottom-32 lg:bottom-32"
          >
            <span className="font-semibold text-gray-500">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSongInputGroup;
