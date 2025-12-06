// Problem Statement: Write a function that finds amd prints the smallest number among three given numbers.

function smallestAmongThree(a, b, c) {
  if (a <= b && a <= c) {
    return a;
  } else if (b <= a && b <= c) {
    return b;
  } else if (c <= a && c <= b) {
    return c;
  }

  //   const smallest = Math.min(...arguments);
  //   return smallest;
}

// Another way
function smallestAmongThree2(a, b, c) {
  let smallest = a;
  if (b < smallest) {
    smallest = b;
  }
  if (c < smallest) {
    smallest = c;
  }
  return smallest;
}

console.log(smallestAmongThree(1, 2, 3));
console.log(smallestAmongThree(2, 1, 3));
console.log(smallestAmongThree(3, 2, 1));
console.log(smallestAmongThree(-1, -6, 2));
console.log(smallestAmongThree(2, 2, 1));
console.log(smallestAmongThree(3, 3, 3));
console.log(smallestAmongThree(3, 3, 4));

console.log("Output from smallestAmongThree2");
console.log(smallestAmongThree2(1, 2, 3));
console.log(smallestAmongThree2(2, 1, 3));
console.log(smallestAmongThree2(3, 2, 1));
console.log(smallestAmongThree2(-1, -6, 2));
console.log(smallestAmongThree2(2, 2, 1));
console.log(smallestAmongThree2(3, 3, 3));
console.log(smallestAmongThree2(3, 3, 4));
