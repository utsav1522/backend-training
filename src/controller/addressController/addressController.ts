import { Request, Response, NextFunction } from "express";
import {
  getLocations,
  signIn,
} from "../../service/addressService/addressService.js";

class AddressController {
  addressData = async (req: Request, res: Response) => {
    const locations = await getLocations();
    return res.json(locations);
  };

  userSignIn = async (req: Request, res: Response) => {
    try {
      const username = req.body.username;
      const name = req.body.name;
      if (username && name) {
        const accessToken = await signIn(username, name);
        return res.json({ accessToken: `Bearer ${accessToken}` });
      } else {
        return res.status(400).send("Credentials not specified");
      }
    } catch (err) {
      return res.status(500).send("Internal Server Error");
    }
  };
}

const addressController = new AddressController();
export { addressController };
