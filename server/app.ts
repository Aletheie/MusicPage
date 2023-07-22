import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./mongoDB/connect.js";

import songRoutes from "./routes/songRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/login", loginRoutes);
app.use("/api/songs", songRoutes);

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
