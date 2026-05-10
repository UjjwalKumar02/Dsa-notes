// -----------------------------------Solution 1--------------------
var solution = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
};

// --------------------------------Solution 2-----------------------
var optimal = function (nums) {
  let n = nums.length;

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let midVal = nums[mid];
    let leftVal = mid > 0 ? nums[mid - 1] : Number.MIN_SAFE_INTEGER;
    let rightVal = mid < n - 1 ? nums[mid + 1] : Number.MIN_SAFE_INTEGER;

    if (midVal > leftVal && midVal > rightVal) {
      return mid;
    } else if (leftVal > midVal) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

let nums = [1, 2, 1, 3, 5, 6, 4];

let res1 = solution(nums);
let res2 = solution(nums);

console.log(res1);
console.log(res2);
