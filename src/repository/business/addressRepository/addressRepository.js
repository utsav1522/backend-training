import { Country } from "./model";

class AddressRepository {
  async insertOneCountry(country) {
    try {
      const result = await Country.insert(country);
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
