import * as dotenv from "dotenv";
import express from "express";
import { upload } from "../cloudinary/index.js";
import {
  createSong,
  getHeartSongs,
  getSongs,
  updateHeart,
} from "../controllers/songs.js";
import { requireAuth } from "../utils/authMiddleware.js";

dotenv.config();

const router = express.Router();

const uploadSingle = upload().single("songFile");

router.post("/api/songs", requireAuth, uploadSingle, createSong);

router.post("/songs", getSongs);

router.put("/songs", updateHeart);

router.post("/songs/heart", getHeartSongs);

export default router;
