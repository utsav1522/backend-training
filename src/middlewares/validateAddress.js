import { addressValidation } from "../controller/addressController/addressValidation.js";

export const validateAddress = (req, res, next) => {
  const { error } = addressValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
