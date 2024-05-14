import fs from "fs";
export const readFile = (req, res, next) => {
  fs.writeFile("/inaccessible-path", "data", next);
};
