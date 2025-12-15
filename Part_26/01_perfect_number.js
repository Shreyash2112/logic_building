// Problem Statement: Write a program that checks if a given number is a perfect number or not.

// Shortest way
function isPerfectNumber(num) {
  let numberSum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      numberSum += i;
    }
  }
  return numberSum === num;
}

// Using array
function isPerfectNumber2(num) {
  let properDivisors = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      properDivisors.push(i);
    }
  }
  let sum = properDivisors.reduce((acc, curr) => acc + curr, 0);

  return sum === num;
}

console.log("Is 6 perfect number?", isPerfectNumber(6));
console.log("Is 7 perfect number?", isPerfectNumber(7));
console.log("Is 28 perfect number?", isPerfectNumber(28));
console.log("Is 496 perfect number?", isPerfectNumber(496));
console.log("Is 500 perfect number?", isPerfectNumber(500));
console.log("Is 8128 perfect number?", isPerfectNumber(8128));
console.log("");
console.log("");
console.log("Is 6 perfect number?", isPerfectNumber2(6));
console.log("Is 7 perfect number?", isPerfectNumber2(7));
console.log("Is 28 perfect number?", isPerfectNumber2(28));
console.log("Is 496 perfect number?", isPerfectNumber2(496));
console.log("Is 500 perfect number?", isPerfectNumber2(500));
console.log("Is 8128 perfect number?", isPerfectNumber2(8128));
