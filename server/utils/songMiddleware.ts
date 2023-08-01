import Song from "../mongoDB/models/song.js";
import User from "../mongoDB/models/user.js";
import { NextFunction, Response, Request } from "express";
import RequestWithUser from "./RequestWithUser.js";
import { Session } from "./authMiddleware.js";
import SongType from "./Song.js";

const checkSongLimit = async (
  req: RequestWithUser & { session: Session },
  res: Response,
  next: NextFunction
) => {
  const userFromDatabase = await User.findOne({ email: req.session.email });
  const songsFromDatabase = await Song.find({
    user: userFromDatabase?._id,
  });
  if (songsFromDatabase.length >= 5) {
    res.status(400).json({ message: "You have reached the song limit" });
  } else {
    next();
  }
};

const checkSongSuffixAndSize = (
  req: Request<{}, {}, SongType>,
  res: Response,
  next: NextFunction
) => {
  const { songFile } = req.body;
  const songSuffix = songFile.name.split(".").pop();
  if (songSuffix !== "mp3") {
    res.status(400).json({ message: "Song must be an mp3 file" });
  } else if (req.file && req.file.size > 10000000) {
    res.status(400).json({ message: "Song must be less than 10mb" });
  } else {
    next();
  }
};

export { checkSongLimit, checkSongSuffixAndSize };
