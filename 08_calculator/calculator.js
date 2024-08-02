const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, item) => {
    return acc * item;
  });
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
