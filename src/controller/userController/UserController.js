import {
  getUserDataById,
  addNewUser,
  updateUser,
  findOneUser,
  generateToken,
  verifyPassword,
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

  login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const doc = await findOneUser(username);
    if (Object.keys(doc).length) {
      const result = await verifyPassword(password, doc.password);
      if (result) {
        const payload = { username: username };
        const token = await generateToken(payload);
        return res.status(200).json({ Token: `Bearer ${token}` });
      }
    } else {
      res.status(404).send("User not found");
    }
  };

  update = async (req, res) => {
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
