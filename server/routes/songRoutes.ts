import * as dotenv from "dotenv";
import express from "express";
import multer from "multer";
import { Request, Response } from "express";

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

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
