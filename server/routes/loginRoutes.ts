import express from "express";
import { createUser } from "../controllers/users.js";

const router = express.Router();

router.get("/api/login", (req, res) => {
  res.send("Helolo");
});

router.post("/api/login", createUser);

export default router;
