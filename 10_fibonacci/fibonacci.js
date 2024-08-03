const fibonacci = function (num) {
  num = +num;
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else if (num < 0) {
    return "OOPS";
  }
  let fibonacciNum;
  let prev1 = 0;
  let prev2 = 1;
  for (let i = 2; i <= num; i++) {
    fibonacciNum = prev1 + prev2;
    prev1 = prev2;
    prev2 = fibonacciNum;
  }
  return fibonacciNum;
};
// Do not edit below this line
module.exports = fibonacci;
