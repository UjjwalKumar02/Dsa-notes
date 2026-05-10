/**
 * You are given an array arr of positive integers.
 * Your task is to find all the leaders in the array.
 * An element is considered a leader if it is greater than or equal to all elements to its right.
 * The rightmost element is always a leader.
 */

// --------------------Solution 1---------------------------
var bruteForce = function (nums) {
  let n = nums.length;
  let res = [];

  if (n === 0) return res;

  for (let i = 0; i < n - 1; i++) {
    let greater = true;

    for (let j = i + 1; j < n; j++) {
      if (nums[j] > nums[i]) {
        greater = false;
        break;
      }
    }

    if (greater) {
      res.push(nums[i]);
    }
  }

  res.push(nums[n - 1]);

  return res;
};

// -------------------Solution 2------------------------------
var optimal = function (nums) {
  let res = [];
  let n = nums.length;
  if (n === 0) return [];

  let maxi = nums[n - 1];
  res.push(maxi);

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > maxi) {
      res.push(nums[i]);
      maxi = nums[i];
    }
  }

  let stack = [];
  for (let num of res) {
    stack.push(num);
  }

  let i = 0;
  while (stack.length !== 0) {
    res[i++] = stack[stack.length - 1];
    stack.pop();
  }

  return res;
};

// -------------------------------Solution 3------------------------------
var stackSolution = function (nums) {
  let st = [];
  let n = nums.length;
  let res = [];

  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && st[st.length - 1] <= nums[i]) {
      st.pop();
    }

    if (st.length === 0) {
      res.unshift(nums[i]);
    }

    st.push(nums[i]);
  }

  return res;
};

let arr = [16, 17, 4, 3, 5, 2];
let res1 = bruteForce(arr);
let res2 = optimal(arr);
let res3 = stackSolution(arr);

console.log(res1);
console.log(res2);
console.log(res3);
