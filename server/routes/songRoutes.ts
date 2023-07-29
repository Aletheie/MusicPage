import * as dotenv from "dotenv";
import express from "express";
import { Request, Response } from "express";
import UserType from "../utils/Login";
import { Session } from "../utils/authMiddleware.js";
import { upload } from "../cloudinary/index.js";
import { createSong } from "../controllers/songs.js";
import { requireAuth } from "../utils/authMiddleware.js";
import Song from "../mongoDB/models/song.js";
import User from "../mongoDB/models/user.js";

dotenv.config();

const router = express.Router();

const uploadSingle = upload().single("songFile");

router.post("/api/songs", requireAuth, uploadSingle, createSong);

router.post(
  "/songs",
  async (
    req: Request<{}, {}, UserType> & { session: Session },
    res: Response
  ) => {
    try {
      const userFromDatabase = await User.findOne({ email: req.session.email });
      const songsFromDatabase = await Song.find({
        user: userFromDatabase?._id,
      });
      res.send(songsFromDatabase);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.put("/songs", async (req: Request, res: Response) => {
  const { songId, isFilledHeart } = req.body;
  try {
    const updatedSong = await Song.findByIdAndUpdate(
      songId,
      { isFilledHeart: isFilledHeart },
      { new: true }
    );
    await updatedSong?.save();
    res.send(updatedSong);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
