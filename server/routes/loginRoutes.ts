import express from "express";
import { createUser } from "../controllers/users.js";
import { Request, Response } from "express";
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
    req.session.email ? res.send(true) : res.send(false);
  }
);

export default router;
