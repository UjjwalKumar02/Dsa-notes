// -------------------------------Solution 1--------------------------
var dpSolution = function (height) {
  let n = height.length;

  let leftMaxArr = new Array(n);
  let leftMax = 0;
  for (let i = 0; i < n; i++) {
    leftMaxArr[i] = leftMax;
    leftMax = Math.max(leftMax, height[i]);
  }

  let rightMaxArr = new Array(n);
  let rightMax = 0;
  for (let i = n - 1; i >= 0; i--) {
    rightMaxArr[i] = rightMax;
    rightMax = Math.max(rightMax, height[i]);
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    res += Math.max(0, Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i]);
  }

  return res;
};

// ----------------------------------Solution 2-------------------------------
var twoPointers = function (height) {
  let l = 0;
  let r = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (l <= r) {
    leftMax = Math.max(leftMax, height[l]);
    rightMax = Math.max(rightMax, height[r]);

    if (height[l] < height[r]) {
      water += Math.max(0, leftMax - height[l]);
      l++;
    } else {
      water += Math.max(0, rightMax - height[r]);
      r--;
    }
  }

  return water;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let res1 = dpSolution(height);
let res2 = twoPointers(height);

console.log(res1);
console.log(res2);
