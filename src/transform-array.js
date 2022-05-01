const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform( arr ) {

  if (!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }

  
  let tmpArray = [...arr]
  let resultArr = []
  
  
  
  for (let i = 0; i < tmpArray.length; i++) {
      if (tmpArray[i] == "--discard-next"){
          tmpArray.splice(i + 1, 1)
      }else if(tmpArray[i] == "--discard-prev"){
          resultArr.splice(i-1, 1)
      }else if(tmpArray[i] == "--double-next"){
          resultArr.splice(i + 1, 0, tmpArray[i + 1])
      }else if(tmpArray[i] == "--double-prev"){
          if (tmpArray[i-1] != "--discard-next"){
              resultArr.splice(i, 0, tmpArray[i - 1])
          }    
      }else{
          resultArr.push(tmpArray[i])
      }
  }
  
  resultArr = resultArr.filter(function(item){
    return (item === undefined) ? false : true;
  })
  
  
  return resultArr
}

module.exports = {
  transform
};
