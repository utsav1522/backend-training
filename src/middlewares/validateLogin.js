import { loginValidation } from "../controller/userController/loginValidation.js";

export const validateLogin = (req, res, next) => {
  const { error } = loginValidation.validate(req.body);
  if (error) {
    res.status(401).send("UnAuthorized");
  }
  next();
};
