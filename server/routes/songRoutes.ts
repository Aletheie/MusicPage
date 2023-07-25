import * as dotenv from "dotenv";
import express from "express";
import { Request, Response } from "express";
import { upload } from "../cloudinary/index.js";
import Song from "../utils/Song.js";
import song from "../mongoDB/models/song.js";

dotenv.config();

const router = express.Router();

const uploadSingle = upload().single("songFile");

router.post(
  "/",
  uploadSingle,
  async (req: Request<{}, {}, Song>, res: Response) => {
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
  }
);

export default router;
