// ----------------------------Solution 1-----------------------------
var brute = function (nums) {
  nums.sort((a, b) => a - b);
  
  let res = [];
  bruteRecursion(0, [], nums, res);
  return res;
};

var bruteRecursion = function (idx, curr, nums, res) {
  if (idx === nums.length) {
    let temp = [...curr];

    if (JSON.stringify(res).includes(JSON.stringify(temp)) === false) {
      res.push(temp);
    }

    return;
  }

  curr.push(nums[idx]);
  bruteRecursion(idx + 1, curr, nums, res);
  curr.pop();

  bruteRecursion(idx + 1, curr, nums, res);
};

// ------------------------------Solution 2------------------------
var optimal = function (nums) {
  nums.sort((a, b) => a - b);

  let res = [];
  backtrack(0, [], nums, res);
  return res;
};

var backtrack = function (idx, curr, nums, res) {
  res.push([...curr]);

  for (let i = idx; i < nums.length; i++) {
    if (i > idx && nums[i] === nums[i - 1]) continue;

    curr.push(nums[i]);
    backtrack(i + 1, curr, nums, res);
    curr.pop();
  }
};

let nums = [1, 2, 2];

let res1 = brute(nums);
let res2 = optimal(nums);

console.log(res1);
console.log(res2);
