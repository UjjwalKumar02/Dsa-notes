// -------------------------Solution 1----------------------------------
var twoLoops = function(nums, k){
  let n = nums.length;
  let mpp = new Map();

  for(let i=0; i<n; i++){
    let sum = 0;
    for(let j=i; j<n; j++){
      sum += nums[j];
      mpp.set(sum, Math.max((mpp.get(sum) || 0), j-i+1));
    }
  }

  return mpp.get(k) || 0;
}

// -------------------Solution 2-----------------------------------------
var optimal = function(nums, k){
  let n = nums.length;
  let mpp = new Map();
  let sum = 0;
  let maxLen = 0;

  mpp.set(0, -1);

  for(let i=0; i<n; i++){
    sum += nums[i];

    let target = sum - k;
    if(mpp.has(target)){
      let len = i - mpp.get(target);
      maxLen = Math.max(maxLen, len);
    }

    if(!mpp.has(sum)){
      mpp.set(sum, i);
    }
  }

  return maxLen;
}

let arr = [1, 0, 1, 2, 3, 0, 4];
let res1 = twoLoops(arr, 5);
let res2 = optimal(arr, 5);

console.log(res1, res2);