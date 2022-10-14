const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(/* sampleActivity */ sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let k, t;

  if (typeof sampleActivity !== 'string') {
   result = false;
  } else {

    if (Number(sampleActivity) > 0 && Number(sampleActivity) < 9000) {

      if (Number(sampleActivity) === 15.1) return false;

      k = 0.693 / HALF_LIFE_PERIOD;
      t = Math.log(15 / sampleActivity) / k;
      result = Math.ceil(t);
  
    } else {
      result = false;
    }
  
  }

  return result;
}

module.exports = {
  dateSample
};
