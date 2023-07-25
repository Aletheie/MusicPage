import Song from "../utils/Song.js";
import song from "../mongoDB/models/song.js";
import { Request, Response } from "express";

const createSong = async (req: Request<{}, {}, Song>, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const newSong = new song({
    songName: req.body.songName,
    songAuthor: req.body.songAuthor,
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
