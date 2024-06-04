import { addressValidation } from "../controller/addressController/addressValidation.js";
import {Request, Response, NextFunction} from "express";

export const validateAddress = (req: Request, res: Response, next: NextFunction) => {
  const { error } = addressValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
