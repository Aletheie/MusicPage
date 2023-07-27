import * as dotenv from "dotenv";
import express from "express";
import { Request, Response } from "express";
import LoginType from "../utils/Login";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Helolo");
});

router.route("/").post((req: Request<{}, {}, LoginType>, res: Response) => {
  const { username, password, email } = req.body;
  console.log(`from backend: ${username} ${password}`);
  res.send("Helolo");
});

export default router;
