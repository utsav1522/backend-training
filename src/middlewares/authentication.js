/**

* 6. Develop an authentication middleware using a JWT dummy token.
   7. Integrate the authentication middleware with the previously created APIs.
 */

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const env = dotenv.config().parsed;
const SECRET_TOKEN = env.SECRET_TOKEN;

const authenticate = async (req, res, next) => {
  try {
    const authHeaders = req.headers["authorization"];

    if (authHeaders.split(" ")[0] !== "Bearer") {
      res.status(401).send("Invalid Token");
    }
    const token = authHeaders && authHeaders.split(" ")[1];

    if (!token) {
      res.status(401).send("Token not found ....");
    }
    const result = await jwt.verify(token, SECRET_TOKEN);
    if (Object.keys(result).length) {
      next();
    } else {
      res.status().send();
    }
  } catch (err) {
    res.status(401).send(err.message);
  }
};

export { authenticate };
