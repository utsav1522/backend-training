import {
  addNewUserService,
  getUserDataById,
  userUpdate,
  userSignIn,
} from "../../service/userService/userService";
import { Request, Response } from "express";
import { mockData } from "../../mock/MockData";

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
      const doc = await addNewUserService(req.body);
      res.status(201).send(doc);
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const result = await userSignIn(username, password);
      if (Object.keys(result).length) {
        return res.json({ result: result });
      }
    } catch (error: any) {
      return res.status(400).json(`${error}`);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const username = req.body.username;
      const query = req.body.query;
      const doc = await userUpdate(username, query);
      res.status(200).json({ status: doc });
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  };
}

const userController = new UserController();
export { userController };
