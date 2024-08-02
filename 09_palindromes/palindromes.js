const palindromes = function (str) {
  filtered = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");

  let reversed = filtered.slice();
  reversed = reversed.reverse();

  console.log(`filtered : ${filtered}`);
  console.log(`reversed : ${reversed}`);
  if (filtered.join("") === reversed.join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
