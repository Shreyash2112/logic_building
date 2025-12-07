// Problem Statement: Write a function that tells if provided year is a leap year or not.
// Solution Statement: Year which is divisible by 4 & 400 & not divisible by 100 is a leap year

function isLeapYear(num) {
  if (typeof num !== "number") {
    return new Error("Please enter a valid year.");
  }
  let result;
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    result = true;
  } else {
    result = false;
  }

  //   (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0
  //     ? (result = true)
  //     : (result = false);

  return result;
}

console.log("isLeapYear(2000)", isLeapYear(2000));
console.log("isLeapYear(1900)", isLeapYear(1900));
console.log("isLeapYear(2024)", isLeapYear(2024));
console.log("isLeapYear(2025)", isLeapYear(2025));
console.log("isLeapYear(2028)", isLeapYear(2028));
console.log("isLeapYear(2029)", isLeapYear(2029));
console.log("isLeapYear(2030)", isLeapYear(2030));
console.log("isLeapYear(abcd)", isLeapYear("abcd"));
