var mapSolution = function(nums){
  let mpp = new Map();

  for(let num of nums){
    mpp.set(num, (mpp.get(num) || 0) + 1);
  }

  let freq = Math.floor(nums.length/2);

  for(let [key, val] of mpp){
    if(val > freq){
      return key;
    }
  }

  return -1;
}

let arr = [0, 1, 3, 1, 1, 1, 4];
let res = mapSolution(arr);

console.log(res);