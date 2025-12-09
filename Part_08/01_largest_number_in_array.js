// Problem Statement: Write a function that finds and prints the largest element in an array.

function largestInArray(arr) {
  if (!arr || arr.length < 1) {
    throw new Error("Provide a filled array.");
  }

  let largestElem = arr[0];

  //   We can use for loop as well
  arr.forEach((element) => {
    if (element > largestElem) {
      largestElem = element;
    }
  });
  console.log(largestElem);

  //   console.log("Using Math.max", Math.max(...arr));
}

largestInArray([3, 10, 5, 7, 2, 12]);
largestInArray([4, 8, 6, 9, 1, 15, 3]);
largestInArray([5, 15, 3, 9, 2, 11, 7, 4, 13, 6, 21]);
// largestInArray([]);
largestInArray(null);
