// Problem statement: Write a program that calculates the tip amount based on the bill total and percentages by the user.

const formatter = Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

function tipCalculator(amount, percentage) {
  let tipChoices = { 0: 0 };

  percentage.forEach((percent) => {
    let tip = amount * (percent / 100);
    tipChoices[percent] = formatter.format(tip);
  });

  return tipChoices;
}

function tipCalculator2(amount, percentage) {
  return percentage.reduce(
    (acc, percent) => {
      acc[percent] = formatter.format(amount * (percent / 100));
      return acc;
    },
    { 0: 0 }
  );
}

console.log("tipCalculator(500, [5, 10, 15])", tipCalculator(500, [5, 10, 15]));
console.log(
  "tipCalculator(9997, [5, 10, 15])",
  tipCalculator(9997, [5, 10, 15])
);

console.log(
  "tipCalculator2(500, [5, 10, 15])",
  tipCalculator2(500, [5, 10, 15])
);
console.log(
  "tipCalculator2(9997, [5, 10, 15])",
  tipCalculator2(9997, [5, 10, 15])
);
