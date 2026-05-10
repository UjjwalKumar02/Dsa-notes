var solution = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let res = nums.length;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};

let nums = [1, 3, 5, 6],
  target = 5;

let res = solution(nums, target);

console.log(res);
