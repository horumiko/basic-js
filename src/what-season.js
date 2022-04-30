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
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    if(date.getMonth() >= 1 && date.getMonth() < 3 || date.getMonth() == 12) return "winter";
    if(date.getMonth() >= 3 && date.getMonth() < 7) return "spring";
    if(date.getMonth() >= 7 && date.getMonth() < 10) return "summer";
    if(date.getMonth() >= 10 && date.getMonth() < 12) return "autumn";

}

module.exports = {
  getSeason
};
