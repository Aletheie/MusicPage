import express from "express";
import { Request, Response } from "express";
import UserType from "../utils/Login";
import bcrypt from "bcryptjs";
import User from "../mongoDB/models/user.js";
import { Session } from "../utils/authMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Helolo");
});

router.post(
  "/",
  async (
    req: Request<{}, {}, UserType> & { session: Session },
    res: Response
  ) => {
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
      req.session.authenticated = true;
      req.session.email = email;
      res.send("User signed up successfully");
    } else {
      // Log in
      const user = await User.findOne({ email });

      if (!user) {
        res.status(400).send("Invalid credentials");
        return;
      }

      const isMatch = await bcrypt.compare(password, user.passwordHash);

      if (isMatch) {
        req.session.authenticated = true;
        req.session.email = email; //tady to funguje
        res.send("User logged in successfully");
      } else {
        res.status(400).send("Invalid credentials");
      }
    }
  }
);

export default router;
