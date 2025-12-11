// Problem Statement: Write a function that swaps two numbers.

// Using third variable.
function numberSwap(num1, num2) {
  let temp = num1;

  num1 = num2;
  num2 = temp;

  return { num1, num2 };
}

// Without using third variable.
function numberSwap2(num1, num2) {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;

  return { num1, num2 };
}

console.log("Value after swapping:", numberSwap(5, 6));
console.log(
  "Value after swapping, without using third variable:",
  numberSwap2(5, 6)
);
