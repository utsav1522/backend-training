import dotenv from "dotenv";

const env = dotenv.config().parsed;

class No {
  static count = 0;
  static lastReq = Number(env.LAST_REQ);
  static currentReq = Number(env.CURRENT_REQ);
}

const rateLimitting = (req, res, next) => {
  // console.log(No.lastReq);
  // console.log(No.currentReq);

  // if (No.lastReq === 0 && No.currentReq === 0) {
  //   No.currentReq = new Date().getTime();

  //   env.CURRENT_REQ = No.currentReq;

  //   res.send(`Serving Request for.... ${No.count}`);
  //   No.count++;
  // } else if (No.lastReq !== 0) {
  //   No.currentReq = new Date().getTime();

  //   if (No.count > 10) {
  //     console.log("::::::::::::::::;;", env.CURRENT_REQ);
  //     console.log("::::::::::::::::;;", env.LAST_REQ);

  //     res.send("Too Many requests in the given time frame");
  //   } else {
  //     res.send(`Serving Request for.... ${No.count}`);
  //   }
  // }

  if (No.count < 10) {
    res.send(`serving for ${No.count} time`);
    No.count++;
  } else {
    res.send("Unable to process request....");
  }
};
export { rateLimitting };
