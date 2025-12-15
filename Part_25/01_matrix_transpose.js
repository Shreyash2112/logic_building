// Problem Statement: Write a program that transposes a given matrix (swaps rows with columns).

function matrixTranspose(matrix) {
  let transposeOfMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < longestSubArrayLength(matrix); j++) {
      if (!transposeOfMatrix[j]) {
        transposeOfMatrix[j] = [];
      }
      transposeOfMatrix[j][i] = matrix[i][j] ?? 0;
    }
  }
  return transposeOfMatrix;
}

function longestSubArrayLength(arr) {
  let maxLength = 0;
  for (let sub of arr) {
    maxLength = Math.max(sub.length, maxLength);
  }
  return maxLength;
}

let matrix1 = [
  [3, 4, 8],
  [5, 6, 9],
];
console.log("Transpose of matrix1: ", matrixTranspose(matrix1));

let matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log("Transpose of matrix2: ", matrixTranspose(matrix2));

let matrix3 = [
  [3, 4],
  [5, 6, 9],
  [11, 12, 13, 14],
];
console.log("Transpose of matrix3: ", matrixTranspose(matrix3));
