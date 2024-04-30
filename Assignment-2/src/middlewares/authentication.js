/**
 * 6. Develop an authentication middleware using a JWT dummy token.
   7. Integrate the authentication middleware with the previously created APIs.
 */

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

const generateToken = (req, res) => {
  const name = req.headers.name;
  const username = req.headers.username;

  const payload = {
    name: name,
    username: username,
  };

  const secret = env.SECRET_TOKEN;
  const options = { expiresIn: "1h" };
  const token = jwt.sign(payload, secret, options);
  res.json({ token: token });
};

function verifyAccessToken(token) {
  const secret = env.SECRET_TOKEN;

  try {
    const decoded = jwt.verify(token, secret);
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

const authentication = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  const result = verifyAccessToken(token);

  if (!result.success) {
    return res.status(403).json({ error: result.error });
  }

  req.user = result.data;
  next();
};

export { generateToken, authentication };
