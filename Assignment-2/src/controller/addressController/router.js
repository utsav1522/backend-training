import express, { Router } from "express";
import { addressController } from "./addressController.js";

import {
  signIn,
  authenticate,
  requestLogger,
  authenticationMiddleware,
  authorizingMiddleware,
  dataFetchignMiddleware,
  userDataFetchingMiddleware,
  resolver,
  addResponse,
  rateLimitting,
  dataFetching,
  errorHandling,
} from "../../middlewares/index.js";

const router = Router();
router.use(express.json());
router.post("/signin", signIn);
router.post(
  "/getdata",
  authenticate,
  rateLimitting,
  addressController.addressData
);

router.get("/logger", requestLogger);
router.get(
  "/middleware-chain",
  authenticationMiddleware,
  authorizingMiddleware,
  dataFetchignMiddleware,
  userDataFetchingMiddleware,
  resolver
);
router.get("/error", dataFetching, errorHandling);
router.get("/add-response", addResponse);

export default router;
