// ------------------------Solution 1--------------------------------
var twoLoops = function (nums, k) {
  let n = nums.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += nums[j];

      if (sum === k) {
        res++;
      }
    }
  }

  return res;
};

// --------------------------------Solution 2--------------------------
var prefixSum = function (nums, k) {
  let mpp = new Map();
  // sum, freq

  let res = 0;
  let sum = 0;

  mpp.set(0, 1);

  for (let num of nums) {
    sum += num;

    let target = sum - k;
    if (mpp.has(target)) {
      res += mpp.get(target);
    }

    mpp.set(sum, (mpp.get(sum) || 0) + 1);
  }

  return res;
};

let arr = [1, 1, 1];

let res1 = twoLoops(arr, 2);
let res2 = prefixSum(arr, 2);

console.log(res1);
console.log(res2);
