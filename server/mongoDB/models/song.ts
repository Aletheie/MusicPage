import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SongSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  file: { type: String, required: true },
  //user: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("Song", SongSchema);
