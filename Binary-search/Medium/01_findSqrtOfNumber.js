// --------------------------Solution 1----------------------------
var bruteForce = function (num) {
  let res = 0;

  for (let i = 0; i <= num; i++) {
    if (i * i <= num) {
      res = i;
    } else {
      return res;
    }
  }

  return res;
};

// -------------------------------------Solution 2--------------------------
var solution = function (num) {
  let l = 0;
  let r = num;
  let res = 0;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (mid * mid <= num) {
      res = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return res;
};

let n1 = 36;
let n2 = 28;

let res1 = solution(n1);
let res2 = solution(n2);

console.log(res1);
console.log(res2);
