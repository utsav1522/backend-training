
const errorHandler = (err, req, res, next) => {
  console.log("Middleware error handling...");
  const errStatus = err.statusCode || 500;
  
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
  });
};
export { errorHandler };
