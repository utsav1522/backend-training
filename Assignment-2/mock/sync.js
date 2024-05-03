import { data } from "./mocking.js";
import { generateData } from "../src/scripts/seeding.js";
const populateDb = () => {
  if (!data.locations) {
    const generatedData = generateData(100);
    data.locations = [...generatedData];
  }
};

export { populateDb };
