'use strict';

let matrix1: number[][] = [
  [2, 1],
  [0, 1]
];
let matrix2: number[][] = [
  [0, 3],
  [-1, 1]
];

let matrix3: number[][] = [
  [-1, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
];

let matrix4: number[][] = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];

function compare(matrix1, matrix2) {
  let resultarray = [];
  resultarray = new Array(matrix1.length);

  for (let i: number = 0; i < resultarray.length; i++) {
    resultarray[i] = new Array(matrix1[i].length);

    for (var j = 0; j < resultarray[i].length; j++) {

      if (matrix1[i][j] > matrix2[i][j]) {
        resultarray[i][j] = matrix1[i][j];

      } else {
        resultarray[i][j] = matrix2[i][j];
      }
    }
  }
  return resultarray;
}
console.log(compare(matrix1, matrix2));

console.log(compare(matrix3, matrix4));