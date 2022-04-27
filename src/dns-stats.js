const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let tmpArray = [];
    let result = {};

    domains.forEach(function(val){
      tmpArray.push(val.split('.').reverse());
    }) 

    for (let i = 0; i < tmpArray.length; i++) {
      let line = '';
      for (let j = 0; j < tmpArray[i].length; j++) {
        line += '.' + tmpArray[i][j];

        if(!result[line]) result[line] = 1;
        else result[line] += 1;
      }
    }

    return result;
}

module.exports = {
  getDNSStats
};
