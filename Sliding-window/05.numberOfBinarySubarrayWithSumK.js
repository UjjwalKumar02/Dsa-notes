// ----------------------------Solution 1-----------------------------
var twoLoops = function(nums, goal){
  let n = nums.length;
  let cnt = 0;

  for(let i=0; i<n; i++){
    let sum = 0;

    for(let j=i; j<n; j++){
      sum += nums[j];

      if(sum === goal) cnt++;
    }
  }

  return cnt;
}

// --------------------Solution 2-----------------------------------
var slidingWindow = function(nums, goal){
  return atMostK(nums, goal) - atMostK(nums, goal-1);
}

var atMostK = function(nums, k){
  if(k < 0) return 0;

  let n = nums.length;
  let l = 0;
  let cnt = 0;
  let sum = 0;

  for(let r=0; r<n; r++){
    sum += nums[r];

    while(sum > k){
      sum -= nums[l];
      l++;
    }

    cnt += r-l+1;
  }

  return cnt;
}

// -----------------------------------Solution 3-----------------------
var prefixSum = function(nums, goal){
  let mpp = new Map();
  // sum, freq
  mpp.set(0, 1);

  let sum = 0;
  let cnt = 0;

  for(let i=0; i<nums.length; i++){
    sum += nums[i];

    let target = sum - goal;
    if(mpp.has(target)){
      cnt += mpp.get(target);
    }

    mpp.set(sum, (mpp.get(sum) || 0) + 1);
  }

  return cnt;
}

let nums1 = [1,0,1,0,1], goal1 = 2;
let nums2 = [1,0,1,0,1], goal2 = 2;
let nums3 = [1,0,1,0,1], goal3 = 2;

let res1 = twoLoops(nums1, goal1);
let res2 = slidingWindow(nums2, goal2);
let res3 = prefixSum(nums3, goal3);

console.log(res1);
console.log(res2);
console.log(res3);