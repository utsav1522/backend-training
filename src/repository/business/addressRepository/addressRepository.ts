import { Country } from "./model";

class AddressRepository {
  async insertOneCountry(country: any) {
    try {
      const result = await Country.create(country);
      return result;
    } catch (err: any) {
      return new Error(err);
    }
  }

  async insertManyCountries(countries: any) {
    try {
      const result = await Country.insertMany(countries);
      return result;
    } catch (err: any) {
      return new Error(err);
    }
  }
}

export const addressRepository = new AddressRepository();
