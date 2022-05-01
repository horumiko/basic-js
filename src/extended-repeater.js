const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { 
                      * repeatTimes: 3,
                      *  separator: '**', 
                      * addition: 'PLUS',
                      *  additionRepeatTimes: 3,
                      *  additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let [
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
   ] = [options.repeatTimes, options.separator, options.addition, options.additionRepeatTimes, options.additionSeparator];

  str = String(str);
  addition = String(addition);

  let addString = [];
  let result = [];

  for (let i = 0; i < repeatTimes; i++) {
    for (let j = 0; j < additionRepeatTimes; j++) addString.push(addition);

    result.push(str + addString.join(additionSeparator));
    
    addString = [];
  }

  return result.join(separator);
}


module.exports = {
  repeater
};
