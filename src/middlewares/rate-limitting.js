class No {
  static count = 0;
}

const rateLimitting = (req, res, next) => {
  if (No.count > 10) {
    res.send("Exceeding no of requests: ");
  }
  No.count++;
  next();
};
export { rateLimitting };
