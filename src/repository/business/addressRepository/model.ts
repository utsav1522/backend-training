import mongoose, { mongo } from "mongoose";
import { countrySchema } from "./schema";

export const Country = mongoose.model("Country", countrySchema);
