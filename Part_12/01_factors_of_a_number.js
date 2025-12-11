// Problem Statement: Write a function that finds all the factors of a given number.

function factorFinder(number) {
  let factorsOfANumber = [];
  if (typeof number !== "number") {
    throw new Error("Please enter a valid number");
  }

  if (number < 1) {
    throw new Error("Number should be greater than 0.");
  }

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factorsOfANumber.push(i);
    }
  }
  return factorsOfANumber;
}

console.log(factorFinder(4));
console.log(factorFinder(14));
console.log(factorFinder(35));
console.log(factorFinder(14652));
// console.log(factorFinder("as"));
