const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.array.push(`( )`);
    }else{
      this.array.push(`( ${value} )`);
    }

    return chainMaker;
  },

  removeLink(position) {
    if (position > this.getLength() || typeof(position) !== 'number' || position <= 0 ) {
      this.array = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.array.splice(position - 1, 1);
      return chainMaker;
    }
  },

  reverseChain() {
    this.array.reverse();

    return chainMaker;
  },

  finishChain() {
    const result = this.array.join('~~');

    this.array = [];

    return result;
  }
};

module.exports = {
  chainMaker
};
