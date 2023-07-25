import * as dotenv from "dotenv";
import express from "express";
import { upload } from "../cloudinary/index.js";
import { createSong } from "../controllers/songs.js";

dotenv.config();

const router = express.Router();

const uploadSingle = upload().single("songFile");

router.post("/", uploadSingle, createSong);

export default router;
