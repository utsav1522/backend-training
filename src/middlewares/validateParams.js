const validateParams = async (req, res, next) => {
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;
  const username = req.body.username;

  if (!name) {
    return next(new Error("Name not specified"));
  } else {
    if (name.toString().length < 2) {
      return next(new Error("Name Length too Short"));
    }
  }
  if (!phoneNumber) {
    return next(new Error("Phone Number not specified"));
  } else {
    if (phoneNumber.toString().length < 10) {
      return next(new Error("Phone Number Length too short"));
    }
    if (phoneNumber.toString().length > 10) {
      return next(new Error("Phone Number Length too long"));
    }
  }

  if (!username) {
    return next(new Error("Username not specified"));
  } else {
    if (username.toString().length < 5) {
      return next(new Error("username length too short"));
    }
  }

  return res.send("The Query params are correct");
};
export { validateParams };
