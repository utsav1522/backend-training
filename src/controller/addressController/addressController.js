import {
  getLocations,
  signIn,
  insertCountry,
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
        return res.json({ accessToken: `Bearer ${accessToken}` });
      } else {
        return res.status(400).send("Credentials not specified");
      }
    } catch (err) {
      return res.status(500).send("Internal Server Error", err);
    }
  };

  insertCountry = async (req, res) => {
    try {
      const country = req.body;
      const result = await insertCountry(country);
      res.status(201).send(result);
    } catch (err) {
      res.status(400).send("Error Inserting Data", err);
    }
  };
}

const addressController = new AddressController();
export { addressController };
