import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trims: true,
    min: 2,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 115,
  },
  username: {
    type: String,
    required: true,
    min: 5,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    requried: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  permissions: {
    type: [String],
    required: true,
    min: 1,
  },
});
