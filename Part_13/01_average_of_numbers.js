// Problem Statement: Write a function that calculates and return the average of a set of numbers.

function calculateAverage(array) {
  if (!Array.isArray(array)) {
    throw new Error("Please enter a valid number.");
  }
  //   let sum = array.reduce((sum, num) => (sum += num));
  let sum = 0;
  array.forEach((num) => (sum += num));
  let result = sum / array.length;

  return result;
}

console.log(calculateAverage([1, 2, 3]));
console.log(calculateAverage([1, 2, 7, 14]));
console.log(calculateAverage([1, 5, 7, 35]));
