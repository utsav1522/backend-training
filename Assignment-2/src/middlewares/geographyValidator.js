/**
 * 
 */

const geographyMiddleware = (req, res, next) => {
  console.log(req.ip)
  next();
};
export { geographyMiddleware };
