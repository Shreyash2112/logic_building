// Problem Statement: Write a function that converts celcius to fahrenheit.

function temperatureConverter(celcius) {
  if (typeof celcius !== "number") {
    throw new Error("Enter a valid number");
  }
  let result = (celcius * 9) / 5 + 32;
  result = Math.round(result);
  return result;
}

console.log("Temperature in Fahrenheit:", temperatureConverter(27));
console.log("Temperature in Fahrenheit:", temperatureConverter(34));
