export const throwError = (req, res, next) => {
  try {
    throw new Error();
  } catch (err) {
    next(err);
  }
};
