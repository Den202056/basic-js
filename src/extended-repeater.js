const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

// function repeater(/* str, options */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function repeater(str, options) {

  let result = '';

  const s1 = String(str);
  const addition = String(options.addition);
  const additionRepeatTimes = Number(options.additionRepeatTimes);

  for (let i = 0; i < options.repeatTimes; i++) {
    result += s1;
    if (addition) {

      if (additionRepeatTimes) {

        for (let j = 0; j <= additionRepeatTimes; j++) {

          if (j <= additionRepeatTimes - 1) {

            result += addition;
            if (options.hasOwnProperty('additionSeparator')) {
              result += options.additionSeparator;
              // result += addition + '|';
            } else {
              // result += '|';
              // result += addition + options.additionSeparator;
            }
          }

        }
      }
    }
    if (i < options.repeatTimes - 1) {
      if (options.separator === undefined) {
        result += '+';
      } else {
        result += options.separator;
      }
    }
  }


if (!options.hasOwnProperty('repeatTimes')) {
  result = str + options.addition;
}
// console.log('result:', result);
return result;
}

module.exports = {
  repeater
};
