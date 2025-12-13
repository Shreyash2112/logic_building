// Problem Statement: Write a program that prints number pyramid.

function numberPyramid(number) {
  for (let i = 1; i <= number; i++) {
    let lineContent = "";

    for (let space = 1; space <= number - i; space++) {
      lineContent += " ";
    }

    for (let numberCont = 1; numberCont <= i; numberCont++) {
      lineContent += numberCont;
    }

    for (
      let reverseNumberCont = i - 1;
      reverseNumberCont > 0;
      reverseNumberCont--
    ) {
      lineContent += reverseNumberCont;
    }

    console.log(lineContent);
  }
}

numberPyramid(5);
numberPyramid(10);
