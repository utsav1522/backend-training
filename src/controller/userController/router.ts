import express, { Router } from "express";
import { userController } from "./UserController";
import { validate } from "../../middlewares/validate";
import { geographyMiddleware } from "../../middlewares/geographyValidator";
import { queryMiddleWare } from "../../middlewares/queryValidate";
import { validationSuccessful } from "../../libs/helper";

const router = Router();

router.use(express.json());

router.get("/", userController.getUsers);
router.get("/geography", geographyMiddleware, validationSuccessful);
router.post("/register", validate, validationSuccessful);
router.get("/:id", queryMiddleWare, userController.getById);

export default router;
