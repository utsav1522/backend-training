import { Request, Response, NextFunction } from "express";
const dataFetching = (req: Request, res: Response, next: NextFunction) => {
  setTimeout(() => {
    try {
      throw new Error("error");
    } catch (ex) {
      next(ex);
    }
  });
};

const errorHandling = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).send("Fail!");
};

export { dataFetching, errorHandling };
