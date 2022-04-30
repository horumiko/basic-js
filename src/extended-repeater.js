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
  throw new NotImplementedError('Not implemented');
  
  let tmpOpt = [];
  let tmpRes = [];

  if(!options.addition){
    for(let i = 0; i < options.additionRepeatTimes; i++) tmpOpt.push(options.addition);
    tmpOpt.join(options.additionSeparator);
  }
  if(!options.additionSeparator){
    str += tmpOpt.join(options.additionSeparator);
  }else{
    str += tmpOpt.join('+');
  }
  

  for(let i = 0; i < options.repeatTimes; i++){
    tmpRes.push(str);
  }

  if(!options.separator){
    return tmpRes.join(options.separator);
  }else{
    return tmpRes.join('+');
  }


  // remove line with error and write your code here
}

module.exports = {
  repeater
};
