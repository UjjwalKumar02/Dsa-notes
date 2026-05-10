var solution = function (bloomDay, m, k) {
  let maxi = 0;
  for (let bloom of bloomDay) {
    maxi = Math.max(maxi, bloom);
  }

  let l = 1;
  let r = maxi;
  let res = -1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    let possible = isPossible(bloomDay, mid, m, k);

    if (possible) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};

var isPossible = function (bloomDay, mid, m, k) {
  let flowers = 0;
  let bouquets = 0;

  for (let bloom of bloomDay) {
    if (bloom <= mid) {
      flowers++;

      if (flowers === k) {
        bouquets++;
        flowers = 0;
      }
    } else {
      flowers = 0;
    }
  }

  return bouquets >= m;
};

let bloomDay = [7, 7, 7, 7, 12, 7, 7],
  m = 2,
  k = 3;

let res = solution(bloomDay, m, k);

console.log(res);
