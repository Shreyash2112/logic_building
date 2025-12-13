// Problem Statement: Write a program that counts the occurence of each character in the string.

function characterCount(inputString) {
  let charCount = {};
  let lowerCaseStr = inputString.toLowerCase();

  for (const char of lowerCaseStr) {
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char] += 1;
    }
  }
  console.log(charCount);
}

function characterCount2(inputString) {
  let lowerCaseStr = inputString.toLowerCase();
  let splittedStr = lowerCaseStr.split("");

  let result = splittedStr.reduce((acc, char) => {
    if (!acc[char]) {
      acc[char] = 1;
    } else {
      acc[char] += 1;
    }
    return acc;
  }, {});

  console.log(result);
}
characterCount(
  "Shreyash Purankar"
);

characterCount2(
  "Shreyash Purankar"
);
