import dotenv from "dotenv";

const env = dotenv.config().parsed;

const addResponse = (req, res, next) => {
  res.setHeader("header_value", env.HEADER_VALUE);
  return res.send("response incoming....\n check Headers.....");
};
export { addResponse };
