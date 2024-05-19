import mongoose from "mongoose";
import { userSchema } from "./schema.js";

export const User = mongoose.model("User", userSchema);
