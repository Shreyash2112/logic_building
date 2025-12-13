// Problem Statement: Write a program that checks if a number is armstrong or not.

// General way
function isArmstrongNumber(number) {
  let numStr = number.toString();
  let numStrLength = numStr.length;
  let result = 0;
  for (const num of numStr) {
    let multiplication = 1;
    for (let i = 1; i <= numStrLength; i++) {
      multiplication = multiplication * parseInt(num);
    }
    result += multiplication;
  }

  return parseInt(result) === number ? true : false;
}

// JS only way
function isArmstrongNumber2(number) {
  let numStr = number.toString();
  let numStrLength = numStr.length;
  let result = 0;
  for (const num of numStr) {
    result += Math.pow(parseInt(num), numStrLength);
  }
  return result === number;
}

console.log("isArmstrongNumber(153):", isArmstrongNumber(153));
console.log("isArmstrongNumber(370):", isArmstrongNumber(370));
console.log("isArmstrongNumber(243):", isArmstrongNumber(243));

console.log("isArmstrongNumber2(153:)", isArmstrongNumber2(153));
console.log("isArmstrongNumber2(370:)", isArmstrongNumber2(370));
console.log("isArmstrongNumber2(243:)", isArmstrongNumber2(243));
