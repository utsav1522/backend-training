const dataFetching = (req, res, next) => {
  req.foo = true;
  setTimeout(() => {
    try {
      throw new Error("error");
    } catch (ex) {
      next(ex);
    }
  });
};

const errorHandling = (err, req, res, next) => {
  res.status(500).send("Fail!");
};

export { dataFetching, errorHandling };
