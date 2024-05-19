import {
  getUserDataById,
  addNewUser,
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

  addNewUser = async (req, res) => {
    try {
      const doc = await addNewUser(req.body);
      res.status(201).send(doc);
    } catch (err) {
      res.status(400).send("Bad Request");
    }
  };
}
const userController = new UserController();
export { userController };
