import jwt from "jsonwebtoken";

import {
  filterData,
  generateData,
} from "../../service/addressController/addressService.js";
import dotenv from "dotenv";
const env = dotenv.config().parsed;

class AddressController {
  addressData = (req, res, next) => {
    const count = req.query.count;
    const limit = req.query.limit;
    const skip = req.query.skip;

    if (!count) {
      res
        .status(404)
        .send({ errMessage: "count query parameter is required!!" });
    }
    const data = generateData(count);
    if (limit === "0" || !limit) {
      res.json(data);
    }
    const filteredData = filterData(data, limit, skip);
    res.json(filteredData);
  };
}

const addressController = new AddressController();
export { addressController };
