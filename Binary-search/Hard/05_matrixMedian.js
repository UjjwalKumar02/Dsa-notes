// ----------------------------Solution 1------------------------
var bruteForce = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let temp = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      temp.push(matrix[i][j]);
    }
  }

  temp.sort((a, b) => a - b);

  let len = temp.length;
  let mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return Math.floor((temp[mid - 1] + temp[mid]) / 2);
  } else {
    return temp[mid];
  }
};

// -------------------------Solution 2-----------------------
var optimal = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  const getUpperBoundNum = (arr, num) => {
    let l = 0;
    let r = m;

    while (l < r) {
      let mid = Math.floor((l + r) / 2);

      if (arr[mid] <= num) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }

    return l;
  };

  let mini = Number.MAX_SAFE_INTEGER;
  let maxi = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    mini = Math.min(mini, matrix[i][0]);
    maxi = Math.max(maxi, matrix[i][m - 1]);
  }

  let low = mini;
  let high = maxi;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    let cnt = 0;

    for (let i = 0; i < n; i++) {
      cnt += getUpperBoundNum(matrix[i], mid);
    }

    if (cnt <= Math.floor((n * m) / 2)) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};

let matrix1 = [
  [1, 4, 9],
  [2, 5, 6],
  [3, 7, 8],
];
let matrix2 = [
  [1, 3, 8],
  [2, 3, 4],
  [1, 2, 5],
];
let matrix3 = [
  [1, 4, 15],
  [2, 5, 6],
  [3, 8, 11],
];

let res1 = bruteForce(matrix1);
let res2 = bruteForce(matrix2);
let res3 = bruteForce(matrix3);

let res4 = optimal(matrix1);
let res5 = optimal(matrix2);
let res6 = optimal(matrix3);

console.log(res1);
console.log(res2);
console.log(res3);

console.log(res4);
console.log(res5);
console.log(res6);
