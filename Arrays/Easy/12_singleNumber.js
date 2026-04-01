// --------------------------------Solution 1-------------------------------
var singleNumber = function(nums){
  let mpp = new Map();

  for(let num of nums){
    mpp.set(num, (mpp.get(num) || 0) + 1);
  }

  for(let [key, value] of mpp){
    if(value === 1){
      return key;
    }
  }

  return -1;
}

// -------------------------------Solution 2----------------------------------------
var optimal = function(nums){
  let res = 0;

  for(let num of nums){
    res = res ^ num;
  }

  return res;
}

let arr = [2, 2, 1, 4, 4, 5, 5];
let res1 = singleNumber(arr);
let res2 = optimal(arr);

console.log(res1, res2);