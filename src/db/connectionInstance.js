import mongoose from "mongoose";
import dotenv from "dotenv";
import { Logger } from "../libs/requestLogger.js";

const env = dotenv.config().parsed;
const CONNECTION_STRING = env.CONNECTION_STRING;
const DB_NAME = env.DB_NAME;

export const connectDb = async () => {
  try {
    Logger.info("Connecting to Mongo Database");
    const connectionInstance = await mongoose.connect(
      `${CONNECTION_STRING}/${DB_NAME}`
    );
    Logger.info("Connected to Mongo Database");
  } catch (error) {
    Logger.error("Database Connection Error: ", error);
    process.exit(1);
  }
};
