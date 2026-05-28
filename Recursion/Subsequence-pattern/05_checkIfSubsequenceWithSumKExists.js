var solution = function(nums, k){
  return recursion(0, k, nums);
};

var recursion = function(idx, left, nums){
  if(left === 0) return true;

  if(left < 0 || idx >= nums.length) return false;

  let res = false;

  res = res || recursion(idx + 1, left - nums[idx], nums);
  res = res ||recursion(idx + 1, left, nums);

  return res;
};

let  nums1 = [1, 2, 3, 4, 5] , k1 = 8;
let  nums2 = [4, 3, 9, 2] , k2 = 10;

let res1 = solution(nums1, k1);
let res2 = solution(nums2, k2);

console.log(res1);
console.log(res2);