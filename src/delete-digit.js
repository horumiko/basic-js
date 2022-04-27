const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let tmp = n.toString().split('');
  let max = 0; 

  tmp.forEach((elem,index) => {
    let newTmpArr = [...tmp];
    newTmpArr.splice(index, 1);

    let res = parseInt(newTmpArr.join(''));

    if (res > max) max = res;
  });

  return max;
}

module.exports = {
  deleteDigit
};
