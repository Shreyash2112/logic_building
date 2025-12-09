// Problem Statement: Write a function that returns the result of raising a given number to a soecified power.

function exponentCalculator(base, exponent) {
  if (
    typeof base !== "number" ||
    typeof exponent !== "number" ||
    base < 0 ||
    exponent < 0
  ) {
    throw new Error("Enter a valid positive number.");
  }
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result = base * result;
  }
  return result;
}

console.log(exponentCalculator(2, 3));
console.log(exponentCalculator(5, 4));
