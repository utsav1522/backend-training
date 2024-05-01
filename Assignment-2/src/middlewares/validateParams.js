const validateParams = async (req, res, next) => {
  const username = req.query.username;
  const name = req.query.name;
  const phoneNumber = req.query.phoneNumber;

  if (!name || name.toString().length < 2) {
    throw new Error("Name Length too Short");
  }
  if (!phoneNumber || phoneNumber.toString().length < 10) {
    throw new Error("Phone Number Length too short");
  }
  if (!username || username.toString().length < 5) {
    await Promise.resolve()
      .then(() => {
        throw new Error("username length too short");
      })
      .catch((err) => {
        next(err);
      });
  }

  res.send("The Query params are correct");
};
export { validateParams };
