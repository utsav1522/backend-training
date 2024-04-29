import express, { Router } from "express";
import { addressController } from "./addressController.js";
import dotenv from "dotenv";
import { authorization } from "../../middlewares/authentication.js";
import { requestLogger } from "../../middlewares/requestLogger.js";
import {
  middleWare1,
  middleWare2,
  middleWare3,
  middleWare4,
} from "../../middlewares/middlewareChain.js";

const env = dotenv.config().parsed;

const router = Router();

router.use(express.json());

router.post("/", addressController.addressData);
router.post("/sign-up", (req, res) => {
  const token = addressController.generateAccessToken({
    username: req.body.username,
  });
  res.json(token);
});
router.get("/log-in", authorization);
router.get("/logger", requestLogger, (req, res) => {
  res.send("Check the console for data...");
});
router.get(
  "/middleware-chain",
  middleWare1,
  middleWare2,
  middleWare3,
  middleWare4,
  (req, res) => {
    res.send("Check console..... \n" + "Terminating the middleware chains....");
  }
);
export default router;
