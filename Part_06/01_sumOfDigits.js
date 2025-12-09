// Problem Statement: Write a function that calculates and prints the sum of digits of a number.

// General way: without converting to string
function digitSum(num) {
  if (num < 1) {
    throw new Error("PLease enter a positive number.");
  }

  let sum = 0;
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    let lastDigit = i % 10;
    sum += lastDigit;
  }
  return sum;
}

// Converting to string then using split, after that usign forEach & parseInt to add the numbers.
function digitSum2(num) {
  if (num < 1) {
    throw new Error("PLease enter a positive number.");
  }
  let sum = 0;

  const numStr = num.toString();
  const splittedNumStr = numStr.split("");
  splittedNumStr.forEach((num) => {
    sum += parseInt(num);
  });
  return sum;
}

// Converting to string and using reduce
function digitSum3(num) {
  if (num < 1) {
    throw new Error("PLease enter a positive number.");
  }

  const numStr = num.toString();
  const splittedNumStr = numStr.split("");
  return splittedNumStr.reduce((sum, num) => (sum += parseInt(num)), 0);
}

// Converting to string and using forOf
function digitSum4(num) {
  if (num < 1) {
    throw new Error("PLease enter a positive number.");
  }

  let sum = 0;

  const numStr = num.toString();
  for (const digit of numStr) {
    sum += parseInt(digit);
  }

  return sum;
}

console.log("from digitSum", digitSum(123));
console.log("from digitSum", digitSum(11));

console.log("from digitSum2", digitSum2(123));
console.log("from digitSum2", digitSum2(11));

console.log("from digitSum3", digitSum3(123));
console.log("from digitSum3", digitSum3(11));

console.log("from digitSum4", digitSum4(123));
console.log("from digitSum4", digitSum4(11));
