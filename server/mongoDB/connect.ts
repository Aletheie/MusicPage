import mongoose from "mongoose";

const connectDB = async (url: string) => {
  mongoose.set("strictQuery", true);
  if (url) {
    try {
      await mongoose.connect(url);
      console.log("MongoDB connected 🥳");
    } catch (error) {
      console.log("OHH error: " + error);
    }
  }
};

export default connectDB;
