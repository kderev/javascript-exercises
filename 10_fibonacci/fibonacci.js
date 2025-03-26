const fibonacci = function (number) {
  number = parseInt(number);
  console.log(number);
  if (number < 0) {
    return "OOPS";
  }
  if (number === 0) {
    return 0;
  }
  let temp = 0;
  let a = 0;
  let b = 1;
  for (i = 1; i < number; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
