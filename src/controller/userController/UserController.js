import {
  getUserDataById,
} from "../../service/userService/userService.js";
import { mockData } from "../../mock/MockData.js";

class UserController {
  getUsers = (req, res) => {
    res.json(mockData.data);
  };

  getById = (req, res) => {
    let id = req.params.id;
    const result = getUserDataById(Number(id));
    res.json(result);
  };
}
const userController = new UserController();
export { userController };
