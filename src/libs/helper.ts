import { Request, Response } from "express";
const validationSuccessful = (req: Request, res: Response) => {
  res.send("Validation Successful");
};

export { validationSuccessful };
