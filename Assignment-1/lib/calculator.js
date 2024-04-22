const path = require("path");
const { writeFile, readFile } = require("fs/promises");
const prompt = require("prompt");

const { addition, subtraction, multiplication, division } = require("./math");
const { read, write } = require("fs");

const writeResultToFile = (num1, num2, result, operation) => {
  writeFile(
    "result.xls",
    num1.toString() +
      ` ${operation} ` +
      num2.toString() +
      " = " +
      result.toString(),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("data written successfully");
        console.log("data in file is : ", readFile("result.xls", "utf-8"));
      }
    }
  );
};

console.log("Enter a choice:");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

const schema = {
  properties: {
    num1: {
      required: true,
      pattern: /^[0-9]+$/,
      message: "Enter digits only",
    },
    num2: {
      message: "Enter digits only",
      pattern: /^[0-9]+$/,
      required: true,
    },
    choice: {
      message: "make a valid choice",
      pattern: /^[0-9]+$/,
      required: true,
    },
  },
};

prompt.start();
prompt.get(schema, function (error, result) {
  if (
    typeof Number(result.num1) !== "number" &&
    typeof Number(result.num2) !== "number"
  ) {
    throw err;
  }
  if (Number(result.choice) === 1) {
    console.log("Sum is :", addition(Number(result.num1), Number(result.num2)));
    writeResultToFile(
      result.num1,
      result.num2,
      addition(Number(result.num1), Number(result.num2)),
      "+"
    );
  } else if (Number(result.choice) === 2) {
    console.log(
      "Difference is : ",
      subtraction(Number(result.num1), Number(result.num2))
    );
    writeResultToFile(
      result.num1,
      result.num2,
      subtraction(Number(result.num1), Number(result.num2)),
      "-"
    );
  } else if (Number(result.choice) === 3) {
    console.log(
      "Prodict is : ",
      multiplication(Number(result.num1), Number(result.num2))
    );
    writeResultToFile(
      result.num1,
      result.num2,
      multiplication(Number(result.num1), Number(result.num2)),
      "X"
    );
  } else {
    if (Number(result.num2) === 0) {
      console.log("Divisor cannot be zero");
      return;
    } else if (Number(result.num1) === 0) {
      console.log(0);
      return;
    } else {
      console.log(
        "Quotient is : ",
        division(Number(result.num1), Number(result.num2))
      );
      writeResultToFile(
        result.num1,
        result.num2,
        division(Number(result.num1), Number(result.num2)),
        "/"
      );
    }
  }
});
