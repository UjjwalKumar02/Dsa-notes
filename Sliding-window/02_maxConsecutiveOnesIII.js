// ------------------------Solution 1-----------------
var twoLoops = function(nums, k){
  let n = nums.length;
  let maxLen = 0;

  for(let i=0; i<n; i++){
    let zeroes = 0;

    for(let j=i; j<n; j++){
      if(nums[j] === 0) zeroes++;

      if(zeroes > k) break;

      maxLen = Math.max(maxLen, j-i+1);
    }
  }

  return maxLen;
}

// --------------------------------Solution 2---------------------------------
var optimal = function(nums, k){
  let n = nums.length;
  let l = 0;
  let maxLen = 0;
  let zeroes = 0;

  for(let r=0; r<n; r++){
    if(nums[r] === 0) zeroes++;

    while(zeroes > k){
      if(nums[l] === 0) zeroes--;
      l++;
    }

    maxLen = Math.max(maxLen, r-l+1);
  }

  return maxLen;
}

let nums1 = [1,1,1,0,0,0,1,1,1,1,0], k1 = 2;
let nums2 = [1,1,1,0,0,0,1,1,1,1,0], k2 = 2;

let res1 = twoLoops(nums1, k1);
let res2 = optimal(nums2, k2);

console.log(res1);
console.log(res2);