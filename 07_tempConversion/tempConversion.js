const convertToCelsius = function (Fahrenheit) {
  let result = (Fahrenheit - 32) * (5 / 9);
  result = Math.round(result * 10) / 10;
  return result;
};

const convertToFahrenheit = function (Celsius) {
  let result = Celsius * (9 / 5) + 32;
  result = Math.round(result * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
