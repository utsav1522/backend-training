import express, { Router } from "express";
import { userController } from "./UserController.js";
import { validate } from "../../middlewares/validate.js";
import { geographyMiddleware } from "../../middlewares/geographyValidator.js";
import { queryMiddleWare } from "../../middlewares/queryValidate.js";
import { validationSuccessful } from "../../libs/helper.js";

const router = Router();

router.use(express.json());

router.get("/", userController.getUsers);
router.get("/query", queryMiddleWare, validationSuccessful);
router.get("/geography", geographyMiddleware, validationSuccessful);
router.get("/:id", userController.getById);
router.post("/register", validate, validationSuccessful);

export default router;
