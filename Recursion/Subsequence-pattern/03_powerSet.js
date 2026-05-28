// ---------------------------------Solution 1---------------------------
var brute1 = function (nums) {
  let res = [];
  generate(0, [], nums, res);
  return res;
};

var generate = function (start, curr, nums, res) {
  res.push([...curr]);

  if (curr.length === nums.length) {
    return;
  }

  for (let i = start; i < nums.length; i++) {
    curr.push(nums[i]);
    generate(i + 1, curr, nums, res);
    curr.pop();
  }
};

// ----------------------------Solution 2-----------------------------
var brute2 = function (nums) {
  let res = [];

  let n = nums.length;
  let total = 1 << n;

  for (let currentBinary = 0; currentBinary < total; currentBinary++) {
    let temp = [];

    for (let i = 0; i < n; i++) {
      let itrBinary = 1 << i;

      if ((currentBinary & itrBinary) !== 0) {
        temp.push(nums[i]);
      }
    }

    res.push(temp);
  }

  return res;
};

// -------------------------------Solution 3-----------------------------------
var optimal = function (nums) {
  let res = [];
  recursion(nums, 0, [], res);
  return res;
};

var recursion = function (nums, idx, curr, res) {
  if (idx === nums.length) {
    res.push([...curr]);
    return;
  }

  recursion(nums, idx + 1, curr, res);

  curr.push(nums[idx]);
  recursion(nums, idx + 1, curr, res);

  curr.pop();
};

let res1 = optimal([1, 2, 3]);
console.log(res1);
