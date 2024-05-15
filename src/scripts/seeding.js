import { base, faker } from "@faker-js/faker";
import times from "lodash/times.js";
import fs from "fs/promises";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const env = dotenv.config().parsed;

const seedingData = () => {
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
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  const basePath = path.resolve(__dirname, "..");
  const relativePath = path.join(basePath, "..", "mock", "mocking.txt");

  fs.writeFile(relativePath, `${JSON.stringify(newData)}`, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Data added to array and file updated successfully!");
  });
};

export { seedingData };
