import express from "express";
import { UserController } from "./controller/UserController.js";
import "dotenv/config.js";

const userController = new UserController();
const app = express();

let port = process.env.PORT || 4000;

app.use("/:id", userController.getOne);
app.use("/", userController.getUsers);

app.listen(port, function () {
  console.log("Server Running on", Number(port));
});
