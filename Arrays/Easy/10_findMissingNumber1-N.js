/**
 * 
 * @param {number[]} nums
 * @returns {number} 
 */

var missingNumber = function(nums){
  let st = new Set(nums);

  for(let i=1; i<=nums.length+1; i++){
    if(!st.has(i)){
      return i;
    }
  }

  return -1;
}

let arr = [1, 2, 4, 5];
let res = missingNumber(arr);

console.log(res);