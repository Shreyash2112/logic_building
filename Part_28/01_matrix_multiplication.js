// Problem Statement: Write a program that multiplies two matrices and returns the result.

function matrixMultiplication(matrixA, matrixB) {
  const matrixC = [];
  const rows = matrixA.length;
  const rowsInSecMtrx = matrixB.length;
  const columns = matrixB[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let cellValue = 0;
      for (let n = 0; n < rowsInSecMtrx; n++) {
        cellValue += matrixA[i][n] * matrixB[n][j];
      }
      if (!matrixC[j]) {
        matrixC[j] = [];
      }
      matrixC[i][j] = cellValue;
      //   console.log(
      //     matrixA[i][j],
      //     matrixB[j][i],
      //     matrixA[i][rows - 1],
      //     matrixB[rowsInSecMtrx - 1][j]
      //   );
    }
  }
  return matrixC;
}

console.log(
  matrixMultiplication(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ]
  )
);

console.log(
  matrixMultiplication(
    [
      [1, 2, 3],
      [3, 4, 8],
    ],
    [
      [5, 6],
      [7, 8],
      [7, 9],
    ]
  )
);
