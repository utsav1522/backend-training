/**
 * Q3. Write a middleware function to validate user input for a registration form.
 * Check if the required fields are present and if they meet certain criteria
 * (e.g., password strength, email format).
 */

import Joi from "joi";

const userValidationSchema = Joi.object({
  name: Joi.string().min(2).required(),
  age: Joi.number().min(1).max(115).integer().required(),
  username: Joi.string().min(2).max(50).alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")),
});

export { userValidationSchema };
