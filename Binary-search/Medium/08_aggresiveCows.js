var solution = function (nums, k) {
  nums.sort((a, b) => a - b);

  let n = nums.length;
  let l = 0;
  let r = nums[n - 1] - nums[0];
  let res = 0;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (can(nums, k, mid)) {
      res = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return res;
};

var can = function (nums, k, d) {
  let cnt = 1;
  let last = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - last >= d) {
      cnt++;
      last = nums[i];
    }

    if (cnt >= k) {
      return true;
    }
  }

  return false;
};

let k = 4,
  nums = [0, 3, 4, 7, 10, 9];

let res1 = solution(nums, k);

console.log(res1);
