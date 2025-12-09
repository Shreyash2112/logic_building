// Problem Statement: Write a function that checks if a string is palindrome or not.

// General way: usign only one string
function isPalindrome(str) {
  str = str.toLowerCase();
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
    return true;
  }
}

function isPalindrome2(str) {
  str = str.toLowerCase();
  let start = 0;
  let end = str.length - 1;
  for (start, end; start < end; start++) {
    if (str[start] !== str[end]) {
      return false;
    }
    return true;
  }
}

// Using two strings for comparison
function isPalindrome3(str) {
  let originalStr = str.toLowerCase();
  let reversedStr = str.toLowerCase().split("").reverse().join("");
  return reversedStr === originalStr ? true : false;
}

console.log(isPalindrome("AbC"));
console.log(isPalindrome("Aba"));
console.log(isPalindrome("Madam"));

console.log("From second function");
console.log(isPalindrome2("AbC"));
console.log(isPalindrome2("Aba"));
console.log(isPalindrome2("Madam"));

console.log("From third function");
console.log(isPalindrome3("AbC"));
console.log(isPalindrome3("Aba"));
console.log(isPalindrome3("Madam"));
