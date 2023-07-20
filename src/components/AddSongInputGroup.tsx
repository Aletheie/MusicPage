import cd from "../assets/icons8-music-record-64.png";
import "../index.css";
import FileInput from "./FileInput";

const AddSongInputGroup = () => {
  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div className="w-1/3 h-2/3 rounded-3xl shadow-xl bg-[#f4f4f4]">
        <div className="w-full bg-gradient-to-br from-fuchsia-900 via-violet-500 to-indigo-300 h-1/3  rounded-t-3xl"></div>
        <img src={cd} alt="cd image" className="floating mx-auto -mt-10" />
        <FileInput />
      </div>
    </div>
  );
};

export default AddSongInputGroup;
