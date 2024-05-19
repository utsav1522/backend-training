const verifyToken = async (req, res, next) => {
  const authHeaders = req.authHeaders["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];
  const result = await jwt.verify(token, SECRET_TOKEN);
  console.log("User Service:::", result);
  if (result) {
    next();
  } else {
    res.status("401").send("JWT Verify Error: Un-Authorized");
  }
};
