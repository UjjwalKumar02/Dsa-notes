var solution = function (weights, days) {
  let maxi = 0;
  let sum = 0;
  for (let num of weights) {
    maxi = Math.max(maxi, num);
    sum += num;
  }

  let l = maxi;
  let r = sum;
  let res = sum;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    let pos = IsPos(weights, mid, days);

    if (pos) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};

var IsPos = function (weights, mid, days) {
  let currDays = 1;
  let sum = 0;

  for (let num of weights) {
    if (sum + num > mid) {
      currDays++;
      sum = 0;
    }
    sum += num;
  }

  return currDays <= days;
};

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  days = 5;

let res = solution(weights, days);

console.log(res);
