const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {

  let arr = [];
  let teamName = '';

  if (!Array.isArray(members)) return false;

  members.forEach(item => {
    if (typeof item === 'string') {
      for(let i = 0; i < item.length; i++) {
        if (item[i] !== ' ') {
          arr.push(item[i].toUpperCase());
          break;
        }
      }
    }
  });

  arr.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  arr.forEach(item => {
    teamName += item;
  });

  return teamName;
}
module.exports = {
  createDreamTeam
};