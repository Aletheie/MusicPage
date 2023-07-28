import express from "express";
import { createUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Helolo");
});

router.post("/", createUser);

export default router;
