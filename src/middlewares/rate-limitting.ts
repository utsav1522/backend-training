import { Request, Response, NextFunction } from "express";
class No {
  static count = 0;
}

const rateLimitting = (req: Request, res: Response, next: NextFunction) => {
  if (No.count > 10) {
    return res.send("Exceeding no of requests: ");
  }
  No.count++;
  next();
};
export { rateLimitting };
