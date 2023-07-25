import * as dotenv from "dotenv";
import express from "express";
import { Request, Response } from "express";
import { upload } from "../cloudinary/index.js";

interface Song {
  songName: string;
  songAuthor: string;
  songFile: {
    name: string;
    type: string;
  };
}

dotenv.config();

const router = express.Router();

router.post(
  "/",
  upload.single("songFile"),
  async (req: Request<{}, {}, Song>, res: Response) => {
    const { songName, songAuthor } = req.body;
    const songFile = req.file;
    if (!songName) {
      return res.send("Please enter song name");
    }
    try {
      console.log(songName, songAuthor, songFile);
      res.send(req.body);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
);

export default router;
