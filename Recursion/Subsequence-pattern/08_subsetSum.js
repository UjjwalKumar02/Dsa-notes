var solution = function(nums){
  let res = [];

  recursion(0, 0, nums, res);
  
  res.sort((a, b) => a - b);

  return res;
};

var recursion = function(idx, curr, nums, res){
  if(idx === nums.length){
    res.push(curr);
    return;
  }

  recursion(idx + 1, curr + nums[idx], nums, res);
  recursion(idx + 1, curr, nums, res);
};

let nums1 = [2, 3];
let nums2 = [5, 2, 1]

let res1 = solution(nums1);
let res2 = solution(nums2);

console.log(res1);
console.log(res2);