import fs from "fs/promises";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const env = dotenv.config().parsed;
const SECRET_TOKEN = env.SECRET_TOKEN;
const signIn = async (username, name) => {
  const user = {
    name: name,
    username: username,
  };
  const accessToken = await jwt.sign(user, SECRET_TOKEN, { expiresIn: "1d" });
  return accessToken;
};

const getLocations = async () => {
  const result = await fs.readFile(
    "/home/utsav.jain/Desktop/backend-training/backend-training/mock/mocking.txt"
  );
  return JSON.parse(result);
};
export { signIn, getLocations };
