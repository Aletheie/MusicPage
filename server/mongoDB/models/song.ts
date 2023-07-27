import mongoose from "mongoose";
import SongType from "../../utils/Song.js";
const Schema = mongoose.Schema;

const SongSchema = new Schema({
  songName: { type: String, required: true },
  songAuthor: { type: String, required: true },
  songFile: {
    path: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model<SongType & mongoose.Document>("Song", SongSchema);
