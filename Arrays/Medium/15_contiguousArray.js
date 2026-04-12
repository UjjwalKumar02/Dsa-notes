var solution = function (nums) {
  let mpp = new Map();
  // prefix, idx

  mpp.set(0, -1);
  // for len i+1

  let res = 0;
  let prefix = 0;

  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i] === 1 ? 1 : -1;

    if (mpp.has(prefix)) {
      let len = i - mpp.get(prefix);
      res = Math.max(res, len);
    } else {
      mpp.set(prefix, i);
    }
  }

  return res;
};

let nums = [0, 1, 1, 1, 1, 1, 0, 0, 0];

let res = solution(nums);

console.log(res);
