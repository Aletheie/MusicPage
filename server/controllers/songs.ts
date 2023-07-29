import Song from "../mongoDB/models/song.js";
import RequestWithUser from "../utils/RequestWithUser.js";
import { Session } from "../utils/authMiddleware.js";
import User from "../mongoDB/models/user.js";
import UserType from "../utils/Login";
import { Request, Response } from "express";

const createSong = async (
  req: RequestWithUser & { session: Session },
  res: Response
) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  } else if (!req.body.songName || !req.body.songAuthor) {
    return res.status(400).json({ message: "Missing required data" });
  }

  const user = await User.findOne({ email: req.session.email });

  console.log("Email:", req.session.email);

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
