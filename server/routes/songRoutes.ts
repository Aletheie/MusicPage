import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const fileStr = req.body.data;
    console.log(fileStr);
    res.send("hello");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

export default router;
