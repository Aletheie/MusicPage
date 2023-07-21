import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Helolo");
});

export default router;
