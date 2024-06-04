import { mockData } from "../../mock/MockData.js";
import { userRepository } from "../../repository/business/userRepository/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const env = dotenv.config().parsed;
const SECRET_TOKEN = env!.SECRET_TOKEN;

interface User {
  name: string;
  age: number;
  username: string;
  password: string;
  permissions: string[];
  email?: string | null;
}

const getUserDataById = (id: number): any => {
  let result = mockData?.data.find((ele) => {
    if (ele.id === Number(id)) {
      return ele;
    }
  }) || { data: "no data" };
  return result;
};

const addNewUser = async (userDetails: User): Promise<any> => {
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

const updateUser = async (username: string, query: any): Promise<any> => {
  try {
    const user = await findOneUser(username);
    if (user && !isString(user) && user.permissions.includes("update")) {
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
  } catch (err: any) {
    return "MongoDB Updation Error: " + err;
  }
};

const findOneUser = async (username: string) => {
  try {
    const query = { username: username };
    const doc = await userRepository.findUserByQuery(query);
    return doc;
  } catch (err: any) {
    return "MongoDB FindByQuery Error" + err;
  }
};

const verifyPassword = async (password: string, encryptedPassword: string): Promise<boolean> => {
  const result = await bcrypt.compare(password, encryptedPassword);
  return result;
};

const generateToken = async (payload: any): Promise<string> => {
  const token = await jwt.sign(payload, SECRET_TOKEN, { expiresIn: "1d" });
  return token;
};

const isString = (value: any): value is string => {
  return typeof value === 'string';
};

export {
  getUserDataById,
  addNewUser,
  updateUser,
  findOneUser,
  verifyPassword,
  generateToken,
};
