import express from "express";
import { mockData } from "../../../mock/MockData.js";
const router = express.Router();

class UserController {
  getUsers = (req, res) => {
    res.json(mockData.data);
  };

  getOne = (req, res) => {
    let id = req.params.id;
    let result = mockData?.data.find((ele) => {
      if (ele.id === Number(id)) {
        return ele;
      }
    }) || { data: "no data" };
    res.json(result);
  };
}
const userController = new UserController();
export { userController };
