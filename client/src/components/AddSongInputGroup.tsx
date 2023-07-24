import { useState } from "react";
import cd from "../assets/icons8-music-record-64.png";
import "../index.css";
import FileInput from "./FileInput";
import TextInput from "./TextInput";
import axios from "axios";

const AddSongInputGroup = () => {
  const [songName, setSongName] = useState("");
  const [songAuthor, setSongAuthor] = useState("");
  const [songFile, setSongFile] = useState(null as File | null);

  const handleFormSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("songName", songName);
    formData.append("songAuthor", songAuthor);
    formData.append("songFile", songFile as File);
    console.log(songName);
    console.log(songAuthor);
    console.log(songFile);
    console.log(formData);
    axios
      .post("http://localhost:8080/api/songs", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-screen lg:transform lg:transition lg:duration-700 lg:hover:scale-105">
      <form
        typeof="multipart/form-data"
        method="post"
        className="flex justify-center w-full h-screen items-center relative"
      >
        <div className="w-3/4 md:w-1/2 lg:w-1/3  h-2/3 rounded-3xl shadow-xl bg-[#f4f4f4]">
          <div className="w-full bg-gradient-to-br from-fuchsia-900 via-violet-500 to-indigo-300 h-1/4  rounded-t-3xl"></div>
          <img src={cd} alt="cd image" className="floating mx-auto -mt-10" />
          <FileInput selectedFile={songFile} setSelectedFile={setSongFile} />
          <div className="mt-8">
            <TextInput
              placeholder="Song name"
              type="text"
              setInputText={setSongName}
              inputText={songName}
            />
            <TextInput
              placeholder="Song author"
              type="text"
              setInputText={setSongAuthor}
              inputText={songAuthor}
            />
          </div>
          <button
            onSubmit={handleFormSubmit}
            onClick={handleFormSubmit}
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
