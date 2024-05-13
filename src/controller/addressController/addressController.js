import { getLocations } from "../../service/addressService/addressService.js";

class AddressController {
  addressData = async (req, res, next) => {
    const locations = await getLocations();
    res.json(locations);
  };
}

const addressController = new AddressController();
export { addressController };
