/**
 * 6. Develop an authentication middleware using a JWT dummy token.
   7. Integrate the authentication middleware with the previously created APIs.
 */

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const env = dotenv.config().parsed;
const SECRET_TOKEN = env.SECRET_TOKEN;

const signIn = (req, res) => {
  const username = req.body.username;
  const name = req.body.name;

  const user = {
    name: name,
    username: username,
  };
  const accessToken = jwt.sign(user, SECRET_TOKEN);
  res.json({ accessToken: accessToken });
};

const authenticate = (req, res, next) => {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];

  if (token === null) {
    res.status(401).send("Token not found ....");
  }
  jwt.verify(token, SECRET_TOKEN, (err, user) => {
    if (err) {
      res.send(403).send("Token No Longer Valid");
    }
    req.user = user;
    next();
  });
};

export { signIn, authenticate };
