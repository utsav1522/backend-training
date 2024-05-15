import fs from "fs";
import readline from "readline";
import { addition, subtraction, multiplication, division } from "./lib/math.js";
import { Logger } from "../src/libs/requestLogger.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isValidNumber = (input) => {
  return /^-?\d*\.?\d+$/.test(input);
};

const appendDataToCSV = (operation, num1, num2, result) => {
  const csvData = `${operation},${num1},${num2},${result}\n`;
  fs.appendFile("results.csv", csvData, (err) => {
    if (err) {
      Logger.error("Error writing to file:", err);
    } else {
      Logger.info("Result saved to results.csv");
    }
    rl.close();
  });
};

fs.access("results.csv", fs.constants.F_OK, async (err) => {
  if (err) {
    // File does not exist, add headers and data
    const headers = "Operation, Num1, Num2, Result\n";
    try {
      await fs.promises.writeFile("results.csv", headers);
      Logger.info.log("Headers added to results.csv");
      collectInput();
    } catch (error) {
      Logger.error("Error writing headers to file:", error);
      rl.close();
    }
  } else {
    // File exists, only add data
    collectInput();
  }
});

const collectInput = () => {
  rl.question("Enter the first number: ", (num1) => {
    if (!isValidNumber(num1)) {
      console.log("Please enter a valid number.");
      rl.close();
      return;
    }

    rl.question("Enter the second number: ", (num2) => {
      if (!isValidNumber(num2)) {
        console.log("Please enter a valid number.");
        rl.close();
        return;
      }

      rl.question(
        "Enter the operation (add/subtract/multiply/divide): ",
        (operation) => {
          let result;
          switch (operation.toLowerCase()) {
            case "add":
              result = addition(parseInt(num1), parseInt(num2));
              break;
            case "subtract":
              result = subtraction(parseInt(num1), parseInt(num2));
              break;
            case "multiply":
              result = multiplication(parseInt(num1), parseInt(num2));
              break;
            case "divide":
              result = division(parseInt(num1), parseInt(num2));
              break;
            default:
              console.log("Invalid operation");
              rl.close();
              return;
          }
          appendDataToCSV(operation, num1, num2, result);
        }
      );
    });
  });
};

rl.on("close", () => {
  process.exit(0);
});
