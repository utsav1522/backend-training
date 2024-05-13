import express, { Router } from "express";
import { addressController } from "./addressController.js";

import {
  authenticate,
  addResponse,
  rateLimitting,
  dataFetching,
  errorHandling,
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
router.get("/error", dataFetching, errorHandling);
router.get("/add-response", addResponse);

export default router;
