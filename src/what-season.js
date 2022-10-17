const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
// function getSeason(/* date */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function getSeason(date) {

  if (arguments[0] === undefined) {
    return "Unable to determine the time of year!";
  }

  const timestamp = Date.parse(date);

  if (isNaN(timestamp)) {
    throw new Error("Invalid date!");
  } else {

    let season = '';
    let month = date.getMonth();

    if (month >= 2 && month <= 4) {
      season = 'spring';
    } else if (month >= 5 && month <= 7) {
      season = 'summer';
    } else if (month >= 8 && month <= 10) {
      season = 'autumn';
    } else if ((month >= 0 && month <= 1) || month === 11) {
      season = 'winter';
    } else {
      season = false;
    };
  
    return season;
  }

}


module.exports = {
  getSeason
};
