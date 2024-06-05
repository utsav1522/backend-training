import { getUserDataById } from "../../service/userService/userService";
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
}
const userController = new UserController();
export { userController };
