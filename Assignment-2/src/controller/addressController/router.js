import express, { Router } from "express";
import { addressController } from "./addressController.js";
import {
  authentication,
  generateToken,
} from "../../middlewares/authentication.js";
import { requestLogger } from "../../middlewares/requestLogger.js";
import {
  middleWare1,
  middleWare2,
  middleWare3,
  middleWare4,
} from "../../middlewares/middlewareChain.js";
import { addResponse } from "../../middlewares/addResponse.js";
import { rateLimitting } from "../../middlewares/rate-limitting.js";

const router = Router();

router.use(express.json());

router.post("/", addressController.addressData);
router.post("/sign-up", generateToken);

router.get("/log-in", authentication, (req, res) => {
  res.json({ message: "Welcome to the protected route!", user: req.user });
});

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
router.get("/error", (req, res, next) => {
  req.foo = true;
  setTimeout(() => {
    try {
      throw new Error("error");
    } catch (ex) {
      next(ex);
    }
  });
});
router.use((err, req, res, next) => {
  if (req.foo) {
    res.status(500).send("Fail!");
  } else {
    next(err);
  }
});
router.use((err, req, res, next) => {
  res.status(500).send("Error!");
});
router.get("/add-response", addResponse);
router.get("/rate-limitting", rateLimitting);
export default router;
