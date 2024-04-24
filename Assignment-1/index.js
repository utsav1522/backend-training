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
    );
  });
});

rl.on("close", () => {
  process.exit(0);
});
