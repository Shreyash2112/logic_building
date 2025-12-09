// Problem Statement: Write a function that prints the multiplication table for a given number upto a specified range.

function multiplicationTable(number, range) {
  if (number < 1 || range < 1) {
    throw new Error("Please enter a valid number.");
  }
  for (let i = 1; i <= range; i++) {
    let result = number * i;
    console.log(`${number} * ${i} = ${result}`);
  }
}

function multiplicationTable2(number, range) {
  if (
    number < 1 ||
    range < 1 ||
    typeof number !== "number" ||
    typeof range !== "number"
  ) {
    throw new Error("Please enter a valid number.");
  }
  let count = 1;
  for (let i = number; i <= number * range; i += number) {
    console.log(`${number} * ${count++} = ${i}`);
  }
}

// multiplicationTable(2, 10);
// multiplicationTable(10, 30);
// multiplicationTable(0, 10);

multiplicationTable2(2, 10);
multiplicationTable2(10, 30);
// multiplicationTable2(0, 10);
