/**11.Write a series of middleware functions and chain them together
 * to demonstrate how multiple middleware can be applied to a single route.
 */

const authenticationMiddleware = (req, res, next) => {
  console.log("authenticating .....");
  next();
};

const authorizingMiddleware = (req, res, next) => {
  console.log("authorizing ....");
  next();
};

const dataFetchignMiddleware = (req, res, next) => {
  console.log("fetching data ....");
  next();
};

const userDataFetchingMiddleware = (req, res, next) => {
  console.log("user data fetching ....");
  next();
};

const resolver = (req, res) => {
  res.send("Check console..... \n" + "Terminating the middleware chains....");
};

export {
  authenticationMiddleware,
  authorizingMiddleware,
  dataFetchignMiddleware,
  userDataFetchingMiddleware,
  resolver,
};
