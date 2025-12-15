// Problem Statement: Write a program that checks if a given password is strong or not.

function isPasswordStrong(inpString) {
  inpString = inpString.trim();
  const capAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const specialChars = "!@#$%^&*()-_+=[]{}|\\:;\"'<>,./?~";

  let isCapAlphabets = false;
  let isSmallAlphabets = false;
  let isNumbers = false;
  let isSpecialCharacters = false;

  if (inpString.length < 8) {
    return false;
  }

  for (let char of inpString) {
    if (capAlphabets.includes(char)) {
      isCapAlphabets = true;
    }
    if (smallAlphabets.includes(char)) {
      isSmallAlphabets = true;
    }
    if (numbers.includes(char)) {
      isNumbers = true;
    }
    if (specialChars.includes(char)) {
      isSpecialCharacters = true;
    }
  }
  if (isCapAlphabets && isSmallAlphabets && isNumbers && isSpecialCharacters) {
    return true;
  }
  return false;
}

console.log(
  "Is Shreyash@21 a strong password ?",
  isPasswordStrong("Shreyash@21")
);
console.log("Is abcd a strong password ?", isPasswordStrong("abcd"));
console.log("Is ABCD a strong password ?", isPasswordStrong("ABCD"));
console.log(
  "Is A1@purankar a strong password ?",
  isPasswordStrong("A1@purankar")
);
