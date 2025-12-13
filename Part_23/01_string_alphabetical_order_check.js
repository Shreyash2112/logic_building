// Problem Statement: Write a program that checks if a string is in alphabetical order.

// JS only
function isAlphabeticalOrder(string) {
  let lowerCaseStr = string.toLowerCase();
  let nonEmptyLowerCaseStr = lowerCaseStr.replace(/ /g, "");
  let sortedStr = nonEmptyLowerCaseStr.split("").sort().join("");

  return nonEmptyLowerCaseStr === sortedStr;
}

// General way
function isAlphabeticalOrder2(string) {
  let lowerCaseStr = string.toLowerCase();
  let nonEmptyStr = lowerCaseStr.replace(/ /g, "");

  for (let i = 0; i < nonEmptyStr.length - 1; i++) {
    return nonEmptyStr[i] > nonEmptyStr[i + 1] ? false : true;
  }
}

console.log("Is Abcdj in alphabetical order ?", isAlphabeticalOrder("A  bcdj"));
console.log(
  "Is Shreyash in alphabetical order ?",
  isAlphabeticalOrder("Shreyash")
);

console.log(
  "Is Abcdj in alphabetical order ?",
  isAlphabeticalOrder2("Ab    cdj")
);
console.log(
  "Is Shreyash in alphabetical order ?",
  isAlphabeticalOrder2("Shreyash")
);
