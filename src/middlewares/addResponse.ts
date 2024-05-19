import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

const addResponse = (req: Request, res: Response, next: NextFunction) => {
  res.setHeader("header_value", env!.HEADER_VALUE);
  return res.send("response incoming....\n check Headers.....");
};
export { addResponse };
