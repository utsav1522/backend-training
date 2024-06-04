import { Request, Response } from "express";
import { getUserDataById } from "../../service/userService/userService";
import { mockData } from "../../mock/MockData";
import {
  addNewUser,
  updateUser,
  findOneUser,
  verifyPassword,
  generateToken,
} from "../../service/userService/userService";

interface User {
  username: string;
  password: string;
  name: string;
  age: number;
  permissions: string[];
  email?: string | null;
}

const isUser = (doc: any): doc is User => {
  return (
    doc && typeof doc === "object" && "username" in doc && "password" in doc
  );
};

class UserController {
  getUsers = (req: Request, res: Response) => {
    res.json(mockData.data);
  };

  getById = (req: Request, res: Response) => {
    let id = req.params.id;
    const result = getUserDataById(Number(id));
    res.json(result);
  };

  addNewUser = async (req: Request, res: Response) => {
    try {
      const doc = await addNewUser(req.body);
      res.status(201).send(doc);
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  };

  login = async (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;
    const doc = await findOneUser(username);
    if (isUser(doc)) {
      const result = await verifyPassword(password, doc.password);
      if (result) {
        const payload = { username: username };
        const token = await generateToken(payload);
        return res.status(200).json({ Token: `Bearer ${token}` });
      } else {
        return res.status(401).send("Invalid password");
      }
    } else {
      res.status(404).send("User not found");
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const username = req.body.username;
      const query = req.body.query;
      const doc = await updateUser(username, query);
      res.status(200).json({ status: doc });
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  };
}

const userController = new UserController();
export { userController };
