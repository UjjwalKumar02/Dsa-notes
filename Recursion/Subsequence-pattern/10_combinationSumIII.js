var solution = function (k, n) {
  let nums = [];
  for (let i = 1; i <= 9; i++) {
    nums.push(i);
  }

  let res = [];
  backtrack(0, n, [], nums, res, k);
  return res;
};

var backtrack = function (idx, left, curr, nums, res, k) {
  if (curr.length === k) {
    if (left === 0) {
      res.push([...curr]);
    }

    return;
  }

  for (let i = idx; i < nums.length; i++) {
    if (i > idx && nums[i] === nums[i - 1]) continue;

    curr.push(nums[i]);
    backtrack(i + 1, left - nums[i], curr, nums, res, k);
    curr.pop();
  }
};

let res = solution(3, 9);

console.log(res);
