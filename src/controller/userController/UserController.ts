import { Request, Response } from "express";
import {
  addNewUserService,
  getUserDataById,
} from "../../service/userService/userService";
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
}
const userController = new UserController();
export { userController };
