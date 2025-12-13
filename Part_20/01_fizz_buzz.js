// Problem Statement: Write a program that prints numbers from 1 to N, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz" & multiples of 3 & 5 with "FizzBuzz".

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(36)