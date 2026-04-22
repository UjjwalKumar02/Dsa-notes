var solution = function (nums, k) {
  let res = [];
  let dq = [];

  for (let i = 0; i < nums.length; i++) {
    if (dq.length > 0 && dq[0] <= i - k) {
      dq.shift();
    }

    while (dq.length > 0 && nums[dq[dq.length - 1]] < nums[i]) {
      dq.pop();
    }

    dq.push(i);

    if (i >= k - 1) {
      res.push(nums[dq[0]]);
    }
  }

  return res;
};

let arr = [4, 0, -1, 3, 5, 3, 6, 8],
  k = 3;

let res = solution(arr, k);

console.log(res);
