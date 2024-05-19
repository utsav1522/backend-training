import { mockData } from "../../mock/MockData.js";
import { userRepository } from "../../repository/business/userRepository/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const env = dotenv.config().parsed;
const SECRET_TOKEN = env.SECRET_TOKEN;

const getUserDataById = (id) => {
  let result = mockData?.data.find((ele) => {
    if (ele.id === Number(id)) {
      return ele;
    }
  }) || { data: "no data" };
  return result;
};

const addNewUser = async (userDetails) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(userDetails.password, salt);
    userDetails.password = hashPassword;
    const result = await userRepository.insertNewUser(userDetails);
    return result;
  } catch (err) {
    return err;
  }
};

const updateUser = async (username, query) => {
  try {
    const user = await findOneUser(username);
    if (user.permissions.includes("update")) {
      if (Object.keys(user).length) {
        const filter = { username: username };
        const result = await userRepository.updateUser(filter, query);
        return result;
      } else {
        return new Error("Mongo DB User Find Error: User not found");
      }
    } else {
      return new Error("Un Authorized");
    }
  } catch (err) {
    return new Error("MongoDB Updation Error: ", err);
  }
};

const findOneUser = async (username) => {
  try {
    const query = { username: username };
    const doc = await userRepository.findUserByQuery(query);

    return doc;
  } catch (err) {
    return new Error("MongoDB FindByQuery Error", err);
  }
};
const verifyPassword = async (password, encryptedPassword) => {
  const result = await bcrypt.compare(password, encryptedPassword);
  return result;
};

const generateToken = async (payload) => {
  const token = await jwt.sign(payload, SECRET_TOKEN, { expiresIn: "1d" });
  return token;
};

export {
  getUserDataById,
  addNewUser,
  updateUser,
  findOneUser,
  verifyPassword,
  generateToken,
};
