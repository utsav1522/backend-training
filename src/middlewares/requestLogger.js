const requestLogger = (req, res, next) => {
  console.log("URL:", req.url);
  console.log("IP: ", req.ip);
  console.log("METHOD: ", req.method);
  console.log("HEADERS: ", req.headers);
  next();
};

export { requestLogger };
