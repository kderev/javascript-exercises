const removeFromArray = function (array, ...args) {
  const newarray = array.slice();
  const index = newarray.indexOf(args);
  newarray.splice(index, 1);

  return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
