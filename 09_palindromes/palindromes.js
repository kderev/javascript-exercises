const palindromes = function (string) {
  let bool = true;
  let firstCharCompared = (string = string.replace(/[^a-zA-Z0-9]/g, ""));

  let secondCharCompared = (string = string.replace(/[^a-zA-Z0-9]/g, ""));

  string = string.replace("!" || "," || "." || "?", "");
  string = string.toLowerCase();

  console.log(firstCharCompared);
  console.log(secondCharCompared);

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
