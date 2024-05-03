import { data } from "../../../mock/mocking.js";

import { generateData } from "../../service/addressController/addressService.js";

import dotenv from "dotenv";
const env = dotenv.config().parsed;

class Count {
  static count = 0;
}
class AddressController {
  addressData = (req, res, next) => {
    if (Count.count < 10) {
      // const count = req.query.count || 10;

      // if (!count) {
      //   res
      //     .status(404)
      //     .send({ errMessage: "count query parameter is required!!" });
      // }
      // const data = generateData(count);
      // Count.count++;
      res.json(data.locations);
    } else {
      res.send("Exceeded number of requests: ");
    }
  };
}

const addressController = new AddressController();
export { addressController };
