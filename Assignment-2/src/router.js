import { Router } from "express";
import userRouter from "./controller/userController/router.js";

const router = Router();

router.get("/user", userRouter);

export default router;
