// Problem Statement: Write a function that counts returns the number of words in a sentence.

function wordCount(sentence) {
  let splittedSentence = sentence.split(" ");
  let nonEmptyElements = splittedSentence.filter((element) => element !== ""); //If there are multiple consecutive spaces in the senetence this this comes handy.
  let result = nonEmptyElements.length;
  return result;
}

console.log(wordCount("Hi I am shreyash purankar"));
console.log(wordCount("Hi I   am   shreyash    purankar"));
console.log(wordCount("  Hi I   am   shreyash    purankar  "));
