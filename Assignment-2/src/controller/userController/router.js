import { Router } from "express";
import { userController } from "./UserController.js";

const router = Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getById);

export default router;
