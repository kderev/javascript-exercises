const palindromes = function (string) {
  let bool = true;
  let firstCharCompared = (string = string
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase());

  let secondCharCompared = (string = string
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase());

  for (i = 0; i < string.length; i++) {
    firstCharCompared = string.charAt(i);

    secondCharCompared = string.charAt(string.length - 1 - i);

    if (firstCharCompared != secondCharCompared) {
      bool = false;
    }
  }
  return bool;
};

// Do not edit below this line
module.exports = palindromes;
