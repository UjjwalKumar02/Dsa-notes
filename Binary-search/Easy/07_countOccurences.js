var solution = function (nums, target) {
  return getEnd(nums, target) - getStart(nums, target) + 1;
};

var getStart = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let start = -1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      start = mid;
      r = mid - 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return start;
};

var getEnd = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let end = -1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      end = mid;
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return end;
};

let arr = [0, 0, 1, 1, 1, 2, 3],
  target = 1;

let res = solution(arr, target);

console.log(res);
