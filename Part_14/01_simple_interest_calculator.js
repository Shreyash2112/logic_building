// Problem Statement: Write a function that calculates and prints the simple interest on a loan amount.

function calculateSimpleInterest(pAmt, iRate, duration) {
  if (
    typeof pAmt !== "number" ||
    typeof iRate !== "number" ||
    typeof duration !== "number"
  ) {
    throw new Error("Enter a valid number.");
  }
  let simpleInterest = (pAmt * iRate * duration) / 100;
  return simpleInterest.toFixed(2);
}

console.log(calculateSimpleInterest(1000, 5, 1));
console.log(calculateSimpleInterest(20000, 10, 5));
console.log(calculateSimpleInterest(20000, 8.755, 5));
console.log(calculateSimpleInterest(1000000, 7.5, 15));
// console.log(calculateSimpleInterest(1000, "sd", 1));
