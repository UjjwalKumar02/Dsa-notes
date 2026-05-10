// ------------------------Solution 1------------------------
var bruteForce = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let maxCnt = 0;
  let index = -1;

  for (let i = 0; i < n; i++) {
    let cnt = 0;

    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) cnt++;
    }

    if (cnt > maxCnt) {
      maxCnt = cnt;
      index = i;
    }
  }

  return maxCnt > 0 ? index : -1;
};

// --------------------------------Solution 2------------------------
var optimal = function (grid) {
  let n = grid.length;
  let m = grid[0].length;

  let maxCnt = 0;
  let index = -1;

  for (let i = 0; i < n; i++) {
    let cnt = m - lowerBound(grid[i]);

    if (cnt > maxCnt) {
      maxCnt = cnt;
      index = i;
    }
  }

  return maxCnt > 0 ? index : -1;
};

var lowerBound = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  let ans = arr.length;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] >= 1) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return ans;
};

let mat1 = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 0],
];
let mat2 = [
  [0, 0],
  [0, 0],
];
let mat3 = [
  [0, 0, 1],
  [0, 1, 1],
  [0, 1, 1],
];

let res1 = optimal(mat1);
let res2 = optimal(mat2);
let res3 = optimal(mat3);

console.log(res1);
console.log(res2);
console.log(res3);
