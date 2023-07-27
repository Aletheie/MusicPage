import Song from "../mongoDB/models/song.js";
import { Response } from "express";
import RequestWithUser from "../utils/RequestWithUser.js";
import { Session } from "../utils/authMiddleware.js";

const createSong = async (
  req: RequestWithUser & { session: Session },
  res: Response
) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  } else if (!req.body.songName || !req.body.songAuthor) {
    return res.status(400).json({ message: "Missing required data" });
  }

  console.log("Email:", req.session.email);

  const newSong = new Song({
    songName: req.body.songName,
    songAuthor: req.body.songAuthor,
    user: req.session.email,
    songFile: {
      path: req.file.path,
      title: req.file.originalname,
      type: req.file.mimetype,
    },
  });
  try {
    const savedSong = await newSong.save();
    res.status(201).json(savedSong);
  } catch (error: Error | any) {
    res.status(400).json({ message: error.message });
  }
};

export { createSong };
