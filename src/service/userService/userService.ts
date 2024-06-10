import { mockData } from "../../mock/MockData.js";
import { userRepository } from "../../repository/business/userRepository/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Logger } from "../../libs/requestLogger.js";

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

const addNewUserService = async (userDetails: any) => {
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

const userSignIn = async (username: string, password: string) => {
  try {
    const query = { username: username };
    const projections = { _id: 0, updatedAt: 0, createdAt: 0 };

    const user = await userRepository.findOneByQuery(query, projections);
    Logger.info(user);

    if (user && Object.keys(user).length) {
      const matchPassword = await bcrypt.compare(
        password,
        user!.password as string
      );
      if (matchPassword) {
        const tokenPayload = {
          name: user!.name,
          username: user!.username,
          email: user!.email,
        };
        const token = jwt.sign(tokenPayload, SECRET_TOKEN, {
          expiresIn: "15m",
        });
        return { userData: user, token: `Bearer ${token}` };
      } else {
        throw "Username and Password not correct";
      }
    } else {
      throw "Username and Password not correct";
    }
  } catch (error: any) {
    Logger.error("User Service Error: userSignIn: ", error);
    throw error;
  }
};

const userUpdate = async (username: string, updatedValue: object) => {
  try {
    if (username !== "") {
      const filter = { username: username };
      const query = updatedValue;
      const result = await userRepository.updateUser(filter, query);
      return result;
    } else {
      return "User not found";
    }
  } catch (error: any) {
    Logger.error("User Service Error: userUpdate: ", error);
    throw new Error(error);
  }
};

export { getUserDataById, addNewUserService, userUpdate, userSignIn };
