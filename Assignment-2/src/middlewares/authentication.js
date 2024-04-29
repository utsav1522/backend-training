import fs from "fs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

const authorization = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  const decodedToken = jwt.verify(token, env.SECRET_TOKEN);
  res.status(200).json({
    success: true,
    data: {
      userId: decodedToken.userId,
      email: decodedToken.email,
    },
  });
};

export { authorization };
