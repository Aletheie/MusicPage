import Song from "./models/song.js";
import connectDB from "./connect.js";

const removeAll = async () => {
  try {
    connectDB("mongodb://127.0.0.1:27017/musicPage");
    await Song.deleteMany({});
    console.log("All songs removed");
  } catch (error) {
    console.log(error);
  }
};
removeAll();
