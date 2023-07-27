import * as dotenv from "dotenv";
import express from "express";
import { upload } from "../cloudinary/index.js";
import { createSong } from "../controllers/songs.js";
import { requireAuth } from "../utils/authMiddleware.js";

dotenv.config();

const router = express.Router();

const uploadSingle = upload().single("songFile");

router.post("/", requireAuth, uploadSingle, createSong);

export default router;
