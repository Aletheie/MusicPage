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

const uploadSingle = upload().single("songFile");

router.post(
  "/",
  uploadSingle,
  async (req: Request<{}, {}, Song>, res: Response) => {}
);

export default router;
