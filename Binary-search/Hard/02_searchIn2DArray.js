var solution = function (matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;

  let row = -1;

  for (let i = 0; i < n; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][m - 1]) {
      row = i;
      break;
    }
  }

  if (row === -1) return false;

  let l = 0;
  let r = m - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (matrix[row][mid] === target) {
      return true;
    } else if (matrix[row][mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return false;
};
