// Problem Statement: Write a function that return the reverse of a string.

// Generalised way
function stringReversal(str) {
  if (typeof str !== "string") {
    throw new Error("Please provide a valid string.");
  }
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// JS only way
function stringReversal2(str) {
  let splitStr = str.split("");
  let reversedSplitStr = splitStr.toReversed();
  let reversedJoinedStr = reversedSplitStr.join("");

  //   let reversedJoinedStr2 = str.split("").toReversed().join("")

  return reversedJoinedStr;
}
console.log(stringReversal("ABCD EFGH IJ K L"));
console.log(stringReversal("Software Development"));
console.log(stringReversal("Shreyash Purankar"));
console.log(stringReversal(21122002));
