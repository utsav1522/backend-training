import mongoose, { mongo } from "mongoose";
import { countrySchema } from "./schema.js";

export const Country = mongoose.model("Country", countrySchema);
