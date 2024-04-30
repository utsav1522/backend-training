/**11.Write a series of middleware functions and chain them together 
 * to demonstrate how multiple middleware can be applied to a single route.
 */

const middleWare1 = (req, res, next) => {
  console.log("middleware1 called");
  next();
};

const middleWare2 = (req, res, next) => {
  console.log("middleware 2 called");
  next();
};

const middleWare3 = (req, res, next) => {
  console.log("middleware 3 called");
  next();
};

const middleWare4 = (req, res, next) => {
  console.log("middleware 4 called");
  next();
};

export { middleWare1, middleWare2, middleWare3, middleWare4 };
