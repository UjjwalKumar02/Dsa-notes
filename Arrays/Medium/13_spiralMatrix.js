var optimal = function (matrix) {
  let res = [];

  let n = matrix.length;
  let m = matrix[0].length;

  let t = 0;
  let b = n - 1;
  let l = 0;
  let r = m - 1;

  while (t <= b && l <= r) {
    // on top, l=>r
    for (let i = l; i <= r; i++) {
      res.push(matrix[t][i]);
    }
    t++;

    // t => b, on right
    for (let i = t; i <= b; i++) {
      res.push(matrix[i][r]);
    }
    r--;

    // on bottom, r => l
    if (t <= b) {
      for (let i = r; i >= l; i--) {
        res.push(matrix[b][i]);
      }
      b--;
    }

    // b => t, on left
    if (l <= r) {
      for (let i = b; i >= t; i--) {
        res.push(matrix[i][l]);
      }
      l++;
    }
  }

  return res;
};

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let res = optimal(mat);

console.log(res);
