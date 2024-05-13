import {
  getLocations,
  signIn,
} from "../../service/addressService/addressService.js";

class AddressController {
  addressData = async (req, res, next) => {
    const locations = await getLocations();
    return res.json(locations);
  };

  userSignIn = async (req, res) => {
    try {
      const username = req.body.username;
      const name = req.body.name;
      if (username && name) {
        const accessToken = await signIn(username, name);
        res.json({ accessToken: `Bearer ${accessToken}` });
      } else {
        res.status(400).send("Credentials not specified");
      }
    } catch (err) {
      res.status(500).send("Internal Server Error", err);
    }
  };
}

const addressController = new AddressController();
export { addressController };
