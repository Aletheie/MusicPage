import express from "express";
import { createUser, login, logout } from "../controllers/users.js";

const router = express.Router();

router.get("/api/login", (req, res) => {
  res.send("Helolo");
});

router.post("/api/login", createUser);
router.post("/api/login/auth", login);
router.post("/api/logout", logout);

export default router;
