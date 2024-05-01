/**
 * 4. Create scenarios that generate all possible error codes.
 */

const internalServerError = (err, req, res, next) => {
  res.status(500).send("Internal Server Error");
};

const unauthorized = (err, req, res, next) => {
  res.status(401).send("Unauthorized");
};

const forbidden = (err, req, res, next) => {
  res.status(403).send("Forbidden");
};

const badRequest = (err, req, res, next) => {
  res.status(400).send("Bad Request");
};

const notAllowed = (err, req, res, next) => {
  res.status(405).send("Method Not Allowed");
};

const pageNotFound = (err, req, res, next) => {
  res.status(404).send("Page not found !!!");
};

export {
  internalServerError,
  unauthorized,
  forbidden,
  badRequest,
  notAllowed,
  pageNotFound,
};
