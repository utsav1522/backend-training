import { Country } from "./model.js";

class AddressRepository {
  async insertOneCountry(country) {
    try {
      const result = await Country.create(country);

      return result;
    } catch (err) {
      return new Error(err);
    }
  }

  async insertManyCountries(countries) {
    try {
      const result = await Country.insertMany(countries);
      return result;
    } catch (err) {
      return new Error(err);
    }
  }
}

export const addressRepository = new AddressRepository();
