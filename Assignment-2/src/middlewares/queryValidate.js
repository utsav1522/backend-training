/**
 * Create middleware to validate that specific query parameters in a route are numeric.
 *  If a non-numeric value is provided, respond with an appropriate error message.
 */

const queryMiddleWare = (req, res, next) => {
  const query = req.query;
  const queryParams = Object.values(query);
  queryParams.map((ele) => {
    if (isNaN(Number(ele))) {
      return res.status(400).send("Query Parameter must be a number");
    }
  });

  next();
};
export { queryMiddleWare };
