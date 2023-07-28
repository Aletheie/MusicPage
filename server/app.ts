import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import session from "express-session";

import connectDB from "./mongoDB/connect.js";

import songRoutes from "./routes/songRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));

app.use(
  session({
    secret: "hashedPassword",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", loginRoutes);
app.use("/", songRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const startServer = async () => {
  try {
    await connectDB("mongodb://127.0.0.1:27017/musicPage");
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
