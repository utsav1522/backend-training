import { Router } from "express";
import { userController } from "./UserController.js";
const router = Router();

router.get("/:id", userController.getOne);
router.get("/", userController.getUsers);

export default router;
