import Song from "../mongoDB/models/song.js";
import User from "../mongoDB/models/user.js";
import { NextFunction, Response } from "express";
import RequestWithUser from "./RequestWithUser.js";
import { Session } from "./authMiddleware.js";

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

export { checkSongLimit };
