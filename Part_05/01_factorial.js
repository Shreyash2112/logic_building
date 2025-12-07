// Problem Statement: Write a function that calculates factorial of a given number.

// Normal zindagi
function calculateFactorial(num) {
  let factorial = 1;

  if (num < 0 || typeof num !== "number") {
    return new Error("Please provide a positive integer number");
  }

  for (let i = num; i > 0; i--) {
    factorial = factorial * i;
  }
  return factorial;
}

// recursion zindagi
function calculateFactorialRecursion(num) {
  if (num < 0 || typeof num !== "number") {
    return new Error("Please provide a positive integer number");
  }

  if (num === 0 || num === 1) {
    return 1;
  }

  return num * calculateFactorialRecursion(num - 1);
}

console.log(calculateFactorial(0));
console.log(calculateFactorial(1));
console.log(calculateFactorial(3));
console.log(calculateFactorial(6));
console.log(calculateFactorial(88));

// console.log(calculateFactorial("ABC"));         //Error
// console.log(calculateFactorial(-1));         //Error

console.log("Using Recursion");
console.log(calculateFactorialRecursion(0));
console.log(calculateFactorialRecursion(1));
console.log(calculateFactorialRecursion(3));
console.log(calculateFactorialRecursion(6));
console.log(calculateFactorialRecursion(88));

// console.log(calculateFactorialRecursion("ABC"));         //Error
// console.log(calculateFactorialRecursion(-1));         //Error
