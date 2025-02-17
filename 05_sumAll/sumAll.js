const sumAll = function (firstNumber, lastNumber) {
  let sum = 0;
  let temp = 0;

  if (firstNumber < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(firstNumber)) {
    return "ERROR";
  } else if (!Number.isInteger(lastNumber)) {
    return "ERROR";
  }

  if (firstNumber > lastNumber) {
    temp = firstNumber;
    firstNumber = lastNumber;
    lastNumber = temp;
  }
  for (i = firstNumber; i <= lastNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
