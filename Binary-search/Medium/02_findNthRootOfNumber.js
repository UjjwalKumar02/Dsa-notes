// -------------------------Solution 1---------------------------
var bruteForce = function (n, m) {
  for (let i = 1; i <= m; i++) {
    let num = Math.pow(i, n);

    if (num === m) {
      return i;
    }
    if (num > m) {
      break;
    }
  }

  return -1;
};

// ---------------------------------Solution 2----------------------------
var solution = function (n, m) {
  let l = 1;
  let r = m;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    let res = Math.pow(mid, n);

    if (res === m) {
      return mid;
    } else if (res > m) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};

console.log(solution(4, 16));
