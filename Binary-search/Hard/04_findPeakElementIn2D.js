// -------------------Solution 1--------------------------
var bruteForce = function (mat) {
  let n = mat.length;
  let m = mat[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (checkPeak(mat, i, j, n, m)) {
        return [i, j];
      }
    }
  }
};

var checkPeak = function (mat, i, j, n, m) {
  let t = false;
  let b = false;
  let l = false;
  let r = false;

  if (i - 1 < 0) t = true;
  if (i + 1 >= n) b = true;
  if (j - 1 < 0) l = true;
  if (j + 1 >= m) r = true;

  if (!t) {
    t = mat[i - 1][j] < mat[i][j];
  }

  if (!b) {
    b = mat[i + 1][j] < mat[i][j];
  }

  if (!l) {
    l = mat[i][j - 1] < mat[i][j];
  }

  if (!r) {
    r = mat[i][j + 1] < mat[i][j];
  }

  return t && b && l && r;
};

// ------------------------------------------Solution 2---------------------------------
var optimal = function (mat) {
  let n = mat.length;
  let m = mat[0].length;

  // find col

  let low = 0;
  let high = m - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let row = maxRow(mat, mid, n, m);

    let midVal = mat[row][mid];

    let leftVal = mid > 0 ? mat[row][mid - 1] : Number.MIN_SAFE_INTEGER;
    let rightVal = mid < m - 1 ? mat[row][mid + 1] : Number.MAX_SAFE_INTEGER;

    if (midVal > leftVal && midVal > rightVal) {
      return [row, mid];
    } else if (leftVal > midVal) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return [-1, -1];
};

var maxRow = function (mat, mid, n, m) {
  let maxR = Number.MIN_SAFE_INTEGER;
  let maxVal = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    if (mat[i][mid] > maxVal) {
      maxVal = mat[i][mid];
      maxR = i;
    }
  }

  return maxR;
};

let mat = [
  [10, 20, 15],
  [21, 30, 14],
  [7, 16, 32],
];

let res1 = bruteForce(mat);
let res2 = optimal(mat);

console.log(res1);
console.log(res2);
