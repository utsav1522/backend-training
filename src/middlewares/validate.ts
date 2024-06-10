import { Request, Response, NextFunction } from "express";
import { userValidationSchema } from "../controller/userController/validation.js";

const validate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export { validate };
