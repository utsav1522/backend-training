import { faker } from "@faker-js/faker";
import times from "lodash/times.js";
import fs from "fs/promises";
import dotenv from "dotenv";
const env = dotenv.config().parsed;

const seedingData = () => {
  console.log(env.SEEDING_DATA);
  const SEEDING_DATA = env.SEEDING_DATA;
  if (SEEDING_DATA) {
    addData();
    env.SEEDING_DATA = false;
  }
};

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

const addData = () => {
  const newData = generateData(100);
  fs.writeFile(
    "/home/utsav.jain/Desktop/backend-training/backend-training/Assignment-2/mock/mocking.txt",
    `${JSON.stringify(newData)}`,
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("Data added to array and file updated successfully!");
    }
  );
};

export { seedingData };
