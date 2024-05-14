const validationSuccessful = (req, res) => {
  res.send("Validation Successful");
};

const SuccessMessage = (req, res) => {
  res.send("Success");
};

export { validationSuccessful, SuccessMessage };
