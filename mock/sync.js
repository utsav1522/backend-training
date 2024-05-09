import { generateData } from "../src/scripts/seeding.js";
import fs from "fs";
import { generateData } from "../src/scripts/seeding.js";
const populateDb = () => {
  if (locations && !locations.length) {
    let generatedData = generateData(100);
    fs.writeFile(
      "./data.js",
      `export const locations = ${JSON.stringify(generatedData)}`,
      (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return;
        }
        console.log("Data added to array and file updated successfully!");
      }
    );
  }
};

export { populateDb };
