import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/trainee-dionysus";

try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
} catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
}

export default mongoose;