import { Router } from "express";
import userRouter from "./controller/userController/router.js";
import addressRouter from "./controller/addressController/router.js";

const router = Router();

router.use("/user", userRouter);
router.use("/address", addressRouter);
router.get("/health-check", (req, res) => {
  res.send("I am ok");
});

export default router;
