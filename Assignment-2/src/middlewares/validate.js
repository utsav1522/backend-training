import { userValidationSchema } from "../controller/userController/validation.js";

const validate = (req, res, next) => {
  
  console.log(req.body);
  
  const { error } = userValidationSchema.validate(req.body);
  if (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.details[0].message });
  }
  next();
};

export { validate };
