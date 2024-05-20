import express, { Router } from "express";
import { addressController } from "./addressController.js";

import {
  authenticate,
  addResponse,
  rateLimitting,
  dataFetching,
  globalErrorHandler,
  validateParams,
} from "../../middlewares/index.js";

const router = Router();
router.use(express.json());
router.post("/signin", addressController.userSignIn);
router.post(
  "/getdata",
  authenticate,
  rateLimitting,
  addressController.addressData
);
router.get("/readfile", dataFetching);
router.get("/add-response", addResponse);
router.get("/validate-params", validateParams);

router.use(globalErrorHandler);

export default router;
