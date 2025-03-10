const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

// function getMatrixElementsSum(/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function getMatrixElementsSum(matrix) {

  let sum = 0;

  if (matrix.length <= 1) {
    matrix[0].forEach(element => {
      sum += element;
    });
  } else {

    matrix[0].forEach(item => {
      sum += item;
    })

    for (let i = 1; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++ ) {
        if (matrix[i - 1][j] !== 0) {
          sum += matrix[i][j];
        }
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
