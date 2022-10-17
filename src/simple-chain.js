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
    if (arguments[0] === undefined) {
      this.chain.push('');
      this.len += 1;
      return this;
    } else {
      this.chain.push(String(value));
      this.len += 1;
      return this;
    }
  },

  removeLink(position) {
    if (typeof position !== 'number') {
      throw new Error('You can\'t remove incorrect link!');
    } else if (position <= 0 || position > this.len) {
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(position - 1, 1);
      this.len -= 1;
      return this;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let str = '';
    const currentChain = this.chain;
    const currentLen = this.len;

    currentChain.forEach((item, index) => {
      str += '( ' + item + ' )';
      if (!(index === currentLen - 1)) str += '~~';
    });
    this.chain = [];
    this.len = 0;
    return str;
  }

}

module.exports = {
  chainMaker
};
