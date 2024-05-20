const dataFetching = async (req, res, next) => {
  await Promise.resolve().then(() => {
    res.status(400).send("Bad Request: File not found");
  });
};

export { dataFetching };
