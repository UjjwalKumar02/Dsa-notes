// Smallest index ==> greater or equal to the target

// ----------------------------Solution 1---------------------------
var solution = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let res = nums.length;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] >= target) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};

// ---------------------------------Soution 2---------------------------
var lowerBound = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
};

let nums1 = [1, 2, 2, 3],
  x1 = 2;
let nums2 = [3, 5, 8, 15, 19],
  x2 = 9;

let res1 = solution(nums1, x1);
let res2 = solution(nums2, x2);
let res3 = lowerBound(nums1, x1);
let res4 = lowerBound(nums2, x2);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
