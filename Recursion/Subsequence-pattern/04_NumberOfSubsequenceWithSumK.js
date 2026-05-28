var solution = function(nums, k){
  return recursion(0, k, nums);
};

var recursion = function(idx, left, nums){
  if(left === 0){
    return 1;
  }

  if(left < 0 || idx >= nums.length){
    return 0;
  }

  let res = 0;

  res += recursion(idx + 1, left - nums[idx], nums);
  res += recursion(idx + 1, left, nums);

  return res;
};

let nums1 = [4, 9, 2, 5, 1] , k1 = 10;
let nums2 = [4, 2, 10, 5, 1, 3] , k2 = 5;

let res1 = solution(nums1, k1);
let res2 = solution(nums2, k2);

console.log(res1);
console.log(res2);