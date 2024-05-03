import { faker } from "@faker-js/faker";
import times from "lodash/times.js";

const generateData = (count) => {
  return times(count, () => {
    const address = faker.location;
    return {
      country: address.country(),
      city: address.city(),
      state: address.state(),
      zipCode: address.zipCode(),
      latitude: address.latitude(),
      longitude: address.longitude(),
    };
  });
};
export { generateData };
