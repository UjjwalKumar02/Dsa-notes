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

  return nums[l];
};

let nums = [3, 4, 5, 1, 2];

let res = solution(nums);

console.log(res);
