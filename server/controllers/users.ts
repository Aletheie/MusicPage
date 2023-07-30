import { Request, Response } from "express";
import UserType from "../utils/Login";
import bcrypt from "bcryptjs";
import User from "../mongoDB/models/user.js";
import { Session } from "../utils/authMiddleware.js";
import { body, validationResult } from "express-validator";

const createUser = async (
  req: Request<{}, {}, UserType> & { session: Session },
  res: Response
) => {
  await body("email").isEmail().withMessage("Invalid email address").run(req);
  await body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
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
      req.session.email = email;
      res.send("User logged in successfully");
    } else {
      res.status(400).send("Invalid credentials");
    }
  }
};

const login = (
  req: Request<{}, {}, UserType> & { session: Session },
  res: Response
) => {
  req.session.email ? res.send("Logged In") : res.send("Logged Out");
};

const logout = (
  req: Request<{}, {}, UserType> & { session: Session },
  res: Response
) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.clearCookie("sid");
      res.send("Logged Out");
    }
  });
};

export { createUser, login, logout };
