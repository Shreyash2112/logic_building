// Problem Statement: Write a function that counts and prints the number of vowels and consonants in a given string.

function vowelConsonantCounter(str) {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrtsvwxyz";
  str = str.toLowerCase();
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    } else if (consonants.includes(str[i])) {
      consonantCount++;
    }
  }
  return { vowelCount, consonantCount };
}


console.log(vowelConsonantCounter("Shreyas12h Purankar"));
console.log(vowelConsonantCounter("!!"));
console.log(vowelConsonantCounter("  "));
console.log(vowelConsonantCounter("Hello World"));
