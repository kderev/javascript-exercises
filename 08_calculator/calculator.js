const add = function (term1, term2) {
  let result = term1 + term2;
  return result;
};

const subtract = function (term1, term2) {
  let result = term1 - term2;
  return result;
};

const sum = function (num) {
  let result = 0;
  for (i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result;
};

const multiply = function (product) {
  let result = 1;
  for (i = 0; i < product.length; i++) {
    result *= product[i];
  }
  return result;
};

const power = function (number, power) {
  let result = 1;

  for (i = 0; i < power; i++) {
    result *= number;
  }

  return result;
};

const factorial = function (n) {
  let result = 0;
  if (n === 0) {
    return 1;
  } else {
    result = n * factorial(n - 1);
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
