// Problem Statement: Write a function that tell if the given number is prime or not..

function isPrime(number) {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0 || number == 1) {
      return false;
    }
  }
  return true;
}

// Optimized
function isPrime2(number) {
  let result = true;

  if (number === 2) {
    result = true;
  }
  else if (number % 2 === 0 || number === 1) {
    result = false;
  }

  if (result === true) {
    for (let i = 3; i < number; i += 2) {
      if (number % i === 0) {
        result = false;
        break;
      }
    }
  }
  return result;
}

console.log("From 1st function");
console.log("5 is prime  :", isPrime(5));
console.log("2 is prime  :", isPrime(2));
console.log("1 is prime  :", isPrime(1));
console.log("10 is prime  :", isPrime(10));
console.log("6 is prime  :", isPrime(6));

console.log("From 2nd function");
console.log("5 is prime  :", isPrime2(5));
console.log("2 is prime  :", isPrime2(2));
console.log("1 is prime  :", isPrime2(1));
console.log("10 is prime  :", isPrime2(10));
console.log("6 is prime  :", isPrime2(6));
