// ----------------------------Solution 1----------------------------
var nextPermutation = function (nums) {
  let per = permute([...nums]);

  per.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
  });

  let idx = -1;

  for (let i = 0; i < per.length; i++) {
    let equal = true;

    for (let j = 0; j < per[0].length; j++) {
      if (per[i][j] !== nums[j]) {
        equal = false;
        break;
      }
    }

    if (equal) {
      idx = i;
      break;
    }
  }

  if (idx === -1) return;

  let res = [];
  if (idx === per.length - 1) {
    res = [...per[0]];
  } else {
    res = [...per[idx + 1]];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }

  return;
};

var permute = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  backtrack(nums, res, 0);
  return res;
};

var backtrack = function (nums, res, idx) {
  if (idx === nums.length) {
    res.push([...nums]);
    return;
  }

  for (let i = idx; i < nums.length; i++) {
    [nums[idx], nums[i]] = [nums[i], nums[idx]];
    backtrack(nums, res, idx + 1);
    [nums[idx], nums[i]] = [nums[i], nums[idx]];
  }
};

// ------------------------------------Solution 2------------------------------
var optimal = function (nums) {
  let idx = -1;
  for (let i = nums.length - 2; i >= 0; i++) {
    if (nums[i] < nums[i + 1]) {
      idx = i;
      break;
    }
  }

  if (idx === -1) {
    nums.reverse();
    return;
  }

  for (let i = nums.length - 1; i >= 0; i++) {
    if (nums[i] > nums[idx]) {
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
      break;
    }
  }

  let start = idx + 1,
    end = nums.length - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }

  return;
};

let arr1 = [3, 2, 1];
let arr2 = [3, 2, 1];

nextPermutation(arr1);
optimal(arr2);

console.log(arr1);
console.log(arr2);
