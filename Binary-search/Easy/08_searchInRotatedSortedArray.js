var solution = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[l] <= nums[mid]) {
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;

let res = solution(nums, target);
console.log(res);
