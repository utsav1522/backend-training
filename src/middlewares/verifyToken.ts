import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const env = dotenv.config().parsed;
const SECRET_TOKEN = env!.SECRET_TOKEN;

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send("JWT Verify Error: Token not provided");
  }

  try {
    const result = await jwt.verify(token, SECRET_TOKEN);
    console.log("User Service:::", result);
    next();
  } catch (err) {
    res.status(401).send("JWT Verify Error: Un-Authorized");
  }
};

export default verifyToken;
