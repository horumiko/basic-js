const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr){
  let onePositions = [];

  for(let index = 0; index < arr.length; index++){
    if(arr[index] == -1) onePositions.push(index);
  }

  arr = arr.filter(function(item){
    return item != -1 ? true: false;
  }).sort((a,b) => a-b)
  
  if (onePositions.length == 0){return arr}

  for(let i = 0; i < onePositions.length; i++){
    arr.splice(onePositions[i], 0, -1);
  }

  return arr;
}

module.exports = {
  sortByHeight
};
