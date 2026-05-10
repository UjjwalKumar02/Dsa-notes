// ----------------------------Solution 1---------------------
var bruteForce = function (matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;

  const binarySearch = (arr) => {
    let l = 0;
    let r = m - 1;

    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (arr[mid] === target) {
        return true;
      } else if (arr[mid > target]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

    return false;
  };

  for (let i = 0; i < n; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][m - 1]) {
      if (binarySearch(matrix[i])) {
        return true;
      }
    }
  }

  return false;
};

// ---------------------Solution 2----------------------------
var optimal = function (matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;

  let row = 0;
  let col = m - 1;

  while (row < n && col >= 0) {
    let curr = matrix[row][col];

    if (curr === target) {
      return true;
    } else if (curr > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
};

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 13;

let res1 = bruteForce(matrix, target);
let res2 = optimal(matrix, target);

console.log(res1);
console.log(res2);
