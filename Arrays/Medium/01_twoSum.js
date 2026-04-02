// ---------------------Solution 1-----------------------------------
var twoLoops = function(nums, target){
  let n = nums.length;

  for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
      if(nums[i] + nums[j] === target){
        return [i, j];
      }
    }
  }

  return [];
}

// ------------------------------------Solution 2--------------------------------
var optimal = function(nums, target){
  let n = nums.length;
  let mpp = new Map();
  // num, i

  for(let i=0; i<n; i++){
    let diff = target - nums[i];

    if(mpp.has(diff)){
      return [mpp.get(diff), i];
    }

    mpp.set(nums[i], i);
  }

  return [];
}

let arr = [1, 3, 4, 5, 6];
let res1 = twoLoops(arr, 4);
let res2 = optimal(arr, 4); 

console.log(res1, res2);