import mongoose from "mongoose";

// User account schema
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

// Sleep entry schema
const sleepEntrySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    startTime: { type: Date, required: true },
    endTime: { type: Date },
    notes: { type: String },
  },
  { timestamps: true }
);

export type User = mongoose.InferSchemaType<typeof userSchema>;
export type SleepEntry = mongoose.InferSchemaType<typeof sleepEntrySchema>;

export const User = mongoose.model("User", userSchema);
export const SleepEntry = mongoose.model("SleepEntry", sleepEntrySchema);
