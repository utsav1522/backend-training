/**
 * Create middleware to validate that specific query parameters in a route are numeric.
 *  If a non-numeric value is provided, respond with an appropriate error message.
 */

const queryMiddleWare = (req, res, next) => {
  const query = req.params.id;
  if (isNaN(Number(query))) {
    return res.status(400).send("Query Parameter must be a number");
  }

  next();
};
export { queryMiddleWare };
