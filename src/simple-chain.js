const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

// const chainMaker = {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };

const chainMaker = {
  len: 0,
  chain: [],

  getLength() {
    return this.len;
  },

  addLink(value) {
    this.chain.push(value);
    this.len += 1;
  },

  removeLink(/* position */) {
  },

  reverseChain() {
  },

  finishChain() {
    let str = '';
    this.chain.forEach((item, index) => {
      str += '(' + item + ')';
      console.log('str: ', str);
      if (!(index === this.len - 1)) str += '~~';
    });
    return str;
  }

}


module.exports = {
  chainMaker
};
