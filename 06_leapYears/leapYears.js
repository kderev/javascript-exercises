const leapYears = function (year) {
  const isDivisibleby4 = Number.isInteger(year / 4);
  const isDivisibledby100 = Number.isInteger(year / 100);
  const isDivisibleby400 = Number.isInteger(year / 400);
  if (isDivisibleby4) {
    if (isDivisibledby100) {
      return isDivisibleby400;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
