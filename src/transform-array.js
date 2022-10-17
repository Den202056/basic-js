const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

//  function transform(arr) {

//   // console.debug(arr);

//   const transformArray = [];
//   let flag = false;

//   if (!Array.isArray(arr)) {
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {

//       if (arr[i] === '--discard-prev') {
//         if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') transformArray.pop();
//       } else if (arr[i] === '--discard-next') {
//         if (arr[i + 1] !== undefined) flag = true;
//       } else if (arr[i] === '--double-prev') {
//         if (arr[i - 1] !== undefined && arr[i - 2] !== '--double-next') {
//           console.log('arr[i - 1]: ', arr[i - 1]);
//           console.log('arr[i - 2]: ', arr[i - 2]);

         
//         } else transformArray.push(arr[i - 1]);
//       } else if (arr[i] === '--double-next') {
//         if (arr[i + 1] !== undefined) transformArray.push(arr[i + 1]);
//       } else {
//         transformArray.push(arr[i]);
//       }


//     } else {
//       if (flag !== true) {
//         transformArray.push(arr[i]);
//       }
//       flag = false;

//     }
//   }

//   return transformArray;
// }

function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  transform
};
