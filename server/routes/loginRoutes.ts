import express from "express";
import { createUser } from "../controllers/users.js";
import e, { Request, Response } from "express";
import UserType from "../utils/Login";
import { Session } from "../utils/authMiddleware.js";

const router = express.Router();

router.get("/api/login", (req, res) => {
  res.send("Helolo");
});

router.post("/api/login", createUser);
router.post(
  "/api/login/auth",
  (req: Request<{}, {}, UserType> & { session: Session }, res: Response) => {
    req.session.email ? res.send("Logged In") : res.send("Logged Out");
  }
);

router.post(
  "/api/logout",
  (req: Request<{}, {}, UserType> & { session: Session }, res: Response) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.clearCookie("sid");
        res.send("Logged Out");
      }
    });
  }
);

export default router;
