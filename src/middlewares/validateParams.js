const validateParams = async (req, res, next) => {
  const username = req.query.username;
  const name = req.query.name;
  const phoneNumber = req.query.phoneNumber;

  if (!name || name.toString().length < 2) {
    return res.status(400).send("Name Length too Short");
  }
  if (!phoneNumber || phoneNumber.toString().length < 10) {
    return res.status(400).send("Phone Number Length too short");
  }
  if (!username || username.toString().length < 5) {
    return res.status(400).send("username length too short");w
  }

  return res.send("The Query params are correct");
};
export { validateParams };
