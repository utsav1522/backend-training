import fs from "fs/promises";

const locations = (req, res, next) => {
  const data = fs.readFile(
    "",
    (err, data) => {
      if (err) {
        res.status(500).send("Internal Server Error");
      } else {
        
      }
    }
  );
};
export { locations };
