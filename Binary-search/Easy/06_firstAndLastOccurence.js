var solution = function (nums, target) {
  return [getStart(nums, target), getEnd(nums, target)];
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

let nums = [5, 7, 7, 8, 8, 10],
  target = 8;

let res = solution(nums, target);

console.log(res);
