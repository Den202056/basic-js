const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */


// function encodeLine(/* str */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function encodeLine(str) {

  const arr = [...str];
  let result = '';
  let count = 1;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      if (count !== 1) result += count;
      result += arr[i];
      count = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};