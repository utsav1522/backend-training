import { Router } from "express";
import userRouter from "./controller/userController/router.js";

const router = Router();

router.use("/user", userRouter);

export default router;
