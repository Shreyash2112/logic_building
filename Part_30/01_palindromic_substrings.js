// Problem statement : Write a program to find all palindromic substrings within a given string

function checkSubStr(str) {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function palindromicSubstring(str) {
  if (typeof str !== "string") {
    throw new Error("Please enter a valid string.");
  }

  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const subStr = str.slice(i, j);
      if (checkSubStr(subStr) && subStr.length > 1) {
        result.push(subStr);
      }
    }
  }

  return result;
}

console.log(palindromicSubstring("brmadambr"));
