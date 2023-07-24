import * as dotenv from "dotenv";
import express from "express";
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

router.post("/", async (req: Request<{}, {}, Song>, res: Response) => {
  try {
    console.log(req.body.songName);
    res.send(req.body.songName);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

export default router;
