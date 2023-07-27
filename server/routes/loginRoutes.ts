import * as dotenv from "dotenv";
import express from "express";
import { Request, Response } from "express";
import UserType from "../utils/Login";
import bcrypt from "bcryptjs";
import User from "../mongoDB/models/user.js";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Helolo");
});

router
  .route("/")
  .post(async (req: Request<{}, {}, UserType>, res: Response) => {
    const { username, password, email } = req.body;
    if (username) {
      // Sign up
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      const newUser = new User({
        name: username,
        email,
        passwordHash,
      });
      await newUser.save();
      res.send("User signed up successfully");
    } else {
      // Log in
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).send("Invalid credentials");
      } else {
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (isMatch) {
          res.send("User logged in successfully");
        } else {
          res.status(400).send("Invalid credentials");
        }
      }
    }
  });

export default router;
