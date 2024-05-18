export const globalErrorHandler = (err, req, res, next) => {
  return res.send(err);
};
