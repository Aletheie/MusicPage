import Song from "../mongoDB/models/song.js";
import RequestWithUser from "../utils/RequestWithUser.js";
import { Session } from "../utils/authMiddleware.js";
import User from "../mongoDB/models/user.js";
import UserType from "../utils/Login";
import { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const createSong = async (
  req: RequestWithUser & { session: Session },
  res: Response
) => {
  await body("songName")
    .notEmpty()
    .withMessage("Song name is required")
    .run(req);
  await body("songAuthor")
    .notEmpty()
    .withMessage("Song author is required")
    .run(req);
  await body("songFile")
    .custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Song file is required");
      }
      if (!/\.(mp3|wav)$/i.test(req.file.originalname)) {
        throw new Error("Invalid file type. Please select an MP3 or WAV file");
      }
      return true;
    })
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const user = await User.findOne({ email: req.session.email });

  console.log("Email:", req.session.email);

  if (!req.file)
    return res.status(400).json({ message: "Song file is required" });

  const newSong = new Song({
    songName: req.body.songName,
    songAuthor: req.body.songAuthor,
    user: user?._id,
    isFilledHeart: false,
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

const getSongs = async (
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
};

const getHeartSongs = async (
  req: Request<{}, {}, UserType> & { session: Session },
  res: Response
) => {
  try {
    const userFromDatabase = await User.findOne({ email: req.session.email });
    const songsFromDatabase = await Song.find({
      user: userFromDatabase?._id,
      isFilledHeart: true,
    });
    res.send(songsFromDatabase);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateHeart = async (req: Request, res: Response) => {
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
};

export { createSong, getSongs, getHeartSongs, updateHeart };
