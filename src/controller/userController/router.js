import express, { Router } from "express";
import { userController } from "./UserController.js";
import { validate } from "../../middlewares/validate.js";
import { geographyMiddleware } from "../../middlewares/geographyValidator.js";
import { queryMiddleWare } from "../../middlewares/queryValidate.js";
import { validationSuccessful } from "../../libs/helper.js";
import { authorize } from "../../middlewares/authorize.js";
import { validateLogin } from "../../middlewares/validateLogin.js";

const router = Router();

router.use(express.json());

router.get("/", userController.getUsers);
router.get("/geography", geographyMiddleware, validationSuccessful);
router.post("/register", validate, validationSuccessful);
router.get("/authorize", authorize);
router.get("/:id", queryMiddleWare, userController.getById);
router.post("/signup", validate, userController.addNewUser);
router.post("/login", validateLogin, userController.login);
router.patch("/updateUser", userController.update);

export default router;
