import fs from "fs";
import readline from "readline";
import { addition, subtraction, multiplication, division } from "./lib/math.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isValidNumber(input) {
  return /^\d+$/.test(input);
}

function appendDataToCSV(operation, num1, num2, result) {
  const csvData = `${operation},${num1},${num2},${result}\n`;
  fs.appendFile("results.csv", csvData, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Result saved to results.csv");
    }
    rl.close();
  });
}

fs.access("results.csv", fs.constants.F_OK, (err) => {
  if (err) {
    // File does not exist, add headers and data
    const headers = "Operation, Num1, Num2, Result\n";
    fs.writeFile("results.csv", headers, (err) => {
      if (err) {
        console.error("Error writing headers to file:", err);
        rl.close();
      } else {
        console.log("Headers added to results.csv");
        collectInput();
      }
    });
  } else {
    // File exists, only add data
    collectInput();
  }
});

function collectInput() {
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
}

rl.on("close", () => {
  process.exit(0);
});
