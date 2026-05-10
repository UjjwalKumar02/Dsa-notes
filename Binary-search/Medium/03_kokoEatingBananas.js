var solution = function (piles, h) {
  let maxiK = 0;
  for (let num of piles) {
    maxiK = Math.max(maxiK, num);
  }

  let l = 1;
  let r = maxiK;
  let res = maxiK;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    let time = hoursTaken(piles, mid);

    if (time <= h) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};

var hoursTaken = function (piles, k) {
  let cnt = 0;

  for (let num of piles) {
    cnt += Math.floor((num + k - 1) / k);
  }

  return cnt;
};

let piles = [30, 11, 23, 4, 20],
  h = 6;

let res = solution(piles, h);

console.log(res);
