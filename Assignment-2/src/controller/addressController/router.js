import express, { Router } from "express";
import fs from "fs";
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
import { errorHandler } from "../../middlewares/errorHandler.js";
import { validateParams } from "../../middlewares/validateParams.js";
import {
  internalServerError,
  unauthorized,
  forbidden,
  badRequest,
  notAllowed,
  pageNotFound,
} from "../../middlewares/errors.js";

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
router.get("/error-req", (req, res) => {
  try {
    throw new Error();
  } catch (err) {
    next(err);
  }
});
router.get("/add-response", addResponse);
router.get("/rate-limitting", rateLimitting);
router.get("/async-error", [
  function (req, res, next) {
    fs.writeFile("/inaccessible-path", "data", next);
  },
  function (req, res) {
    res.send("OK");
  },
]);
router.get("/validate-params", validateParams);
router.use(errorHandler);

export default router;
