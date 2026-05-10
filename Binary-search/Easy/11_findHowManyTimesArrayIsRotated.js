var solution = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else if (nums[mid] <= nums[r]) {
      r = mid;
    }
  }

  return l;
};

let nums = [4, 5, 6, 7, 0, 1, 2, 3];

let res = solution(nums);

console.log(res);
