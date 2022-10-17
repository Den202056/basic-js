const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

// class DepthCalculator {
//   calculateDepth(/* arr */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

class DepthCalculator {

  calculateDepth(arr) {

    let count = 0;

    function walkDeep(arr, flag) {

      arr.forEach(element => {
        if (Array.isArray(element)) {
          walkDeep(element, flag + 1);
        }
      });
      if (flag > count) count = flag;
    }

    walkDeep(arr, 1);

    return count;
  }
}


module.exports = {
  DepthCalculator
};
