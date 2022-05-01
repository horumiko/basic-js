const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let n_tmp = n.split('-');
  let reg = /[a-fA-F\d]+/;

  n_tmp = n_tmp.map(function(val, index, array){
    if(val.match(reg).toString().length == 2){
      return true;
    }else return false;
  })
  return n_tmp.every(item => item === true);
}

module.exports = {
  isMAC48Address
};
