import lodash from "lodash";
const addition = (num1, num2) => {
  return lodash.add(num1, num2);
};

const subtraction = (num1, num2) => {
  return lodash.subtract(num1, num2);
};

const multiplication = (num1, num2) => {
  return lodash.multiply(num1, num2);
};

const division = (num1, num2) => {
  return lodash.divide(num1, num2);
};

export { addition, subtraction, multiplication, division };
