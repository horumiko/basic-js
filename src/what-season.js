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
  if (!date) return "Unable to determine the time of year!";
  
  if (Object.prototype.toString.call(date) != '[object Date]' 
        || Object.getOwnPropertySymbols(date).length !== 0){
    throw new Error('Invalid date!');
  };

  const MONTH = date.getMonth();

  if (MONTH >= 2 && MONTH <= 4) return 'spring';
  if (MONTH >= 5 && MONTH <= 7) return 'summer';
  if (MONTH >= 8 && MONTH <= 10) return 'autumn';
  if (MONTH == 11 || MONTH >= 0 && MONTH <= 1)return 'winter';
  
}

module.exports = {
  getSeason
};
