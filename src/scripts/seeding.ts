import { faker } from "@faker-js/faker";
import times from "lodash/times";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { Logger } from "../libs/requestLogger";

const env = dotenv.config().parsed;

const seedingData = () => {
  const SEEDING_DATA: boolean = Boolean(env!.SEEDING_DATA);
  if (SEEDING_DATA) {
    addData();
    env!.SEEDING_DATA = "false";
  }
};

const generateData = (count: number) => {
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
  // const __dirname = path.dirname(fileURLToPath(import.meta.url));
  console.log(__dirname);
  const basePath = path.resolve(__dirname, "..");
  const relativePath = path.join(basePath, "..", "mock", "mocking.txt");
  Logger.info("Seeding Started");
  fs.writeFile(relativePath, `${JSON.stringify(newData)}`, (err: any) => {
    if (err) {
      Logger.error("Error writing file:", err);
    }
    Logger.info("Data added to array and file updated successfully!");
  });
  Logger.info("Seeding ended");
};

export { seedingData };
