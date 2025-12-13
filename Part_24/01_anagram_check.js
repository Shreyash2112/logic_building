// Problem Statement: Write a program that checks if two strings are anagrams of each other.

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charsInStr1 = {};
  for (const char of str1) {
    // if (!charsInStr1[char]) {
    //   charsInStr1[char] = 0;
    // }
    //   charsInStr1[char] += 1;

    charsInStr1[char] = (charsInStr1[char] || 0) + 1;
  }
  console.log(charsInStr1);

  const charsInStr2 = {};
  for (const char of str2) {
    // if (!charsInStr2[char]) {
    //   charsInStr2[char] = 0;
    // }
    // charsInStr2[char] += 1;

    charsInStr2[char] = (charsInStr2[char] || 0) + 1;
  }
  console.log(charsInStr2);

  for (const key in charsInStr1) {
    if (charsInStr1[key] !== charsInStr2[key]) {
      return false;
    }
  }
  return true;
}

function areAnagrams2(str1, str2) {
  if (typeof str1 !== "string" && typeof str2 !== "string") {
    throw new Error("Enter a valid string");
  }

  if (str1.length !== str2.length) {
    return false;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (let i = 0; i < str1.length; i++) {
    if (!str1.includes(str2[i])) {
      return false;
    }
  }
  return true;
}

console.log("cat", "act : ", areAnagrams("cat", "act"));
console.log("cap", "act : ", areAnagrams("cap", "act"));
console.log("elbow", "below : ", areAnagrams("elbow", "below"));
console.log("spool", "pools : ", areAnagrams("spool", "pools"));
console.log("atat", "tata : ", areAnagrams("atat", "tata"));
console.log("atat", "tatass : ", areAnagrams("atat", "tatass"));

console.log("From anagrams2");
console.log("cat", "act : ", areAnagrams2("cat", "act"));
console.log("cap", "act : ", areAnagrams2("cap", "act"));
console.log("elbow", "below : ", areAnagrams2("elbow", "below"));
console.log("spool", "pools : ", areAnagrams2("spool", "pools"));
console.log("atat", "tata : ", areAnagrams2("atat", "tata"));
console.log("atat", "tatass : ", areAnagrams2("atat", "tatass"));
