var solution = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (mid % 2 === 1) {
      mid--;
    }

    if (nums[mid] === nums[mid + 1]) {
      l = mid + 2;
    } else {
      r = mid;
    }
  }

  return nums[l];
};

let nums = [3, 3, 7, 7, 10, 11, 11];

let res = solution(nums);

console.log(res);
