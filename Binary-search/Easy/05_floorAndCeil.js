var solution = function (nums, target) {
  return [getFloor(nums, target), getCeil(nums, target)];
};

var getFloor = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let res = -1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      res = mid;
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      res = mid;
      l = mid + 1;
    }
  }

  return res === -1 ? -1 : nums[res];
};

var getCeil = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let res = -1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      res = mid;
      r = mid - 1;
    } else if (nums[mid] > target) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res === -1 ? -1 : nums[res];
};

let nums1 = [3, 4, 4, 7, 8, 10],
  x1 = 5;
let nums2 = [3, 4, 4, 7, 8, 10],
  x2 = 8;

let res1 = solution(nums1, x1);
let res2 = solution(nums2, x2);

console.log(res1);
console.log(res2);
