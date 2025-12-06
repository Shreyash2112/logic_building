// Problem Statement: Write a function which takes a numbers as a input and print even or odd.

function evenOddChecker(num) {
  //   if (num % 2 === 0) {
  //     return "even";
  //   }
  //   return "odd";

  return num % 2 === 0 ? "even" : "odd";
}

console.log(evenOddChecker(0));
console.log(evenOddChecker(1));
console.log(evenOddChecker(2));
console.log(evenOddChecker(-1));
console.log(evenOddChecker(-2));
console.log(evenOddChecker(1564));
console.log(evenOddChecker(156656565));
