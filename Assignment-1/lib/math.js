import add from "lodash/add.js";
import subtract from "lodash/subtract.js";
import multiply from "lodash/multiply.js";
import divide from "lodash/divide.js";

const addition = (num1, num2) => {
  return add(num1, num2);
};

const subtraction = (num1, num2) => {
  return subtract(num1, num2);
};

const multiplication = (num1, num2) => {
  return multiply(num1, num2);
};

const division = (num1, num2) => {
  return divide(num1, num2);
};

export { addition, subtraction, multiplication, division };
