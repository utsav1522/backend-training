import { loginValidation } from "../controller/userController/loginValidation.js";
import {Request, Response, NextFunction} from "express";

export const validateLogin = (req: Request, res :Response, next: NextFunction) => {
  const { error } = loginValidation.validate(req.body);
  if (error) {
    res.status(401).send("UnAuthorized");
  }
  next();
};
