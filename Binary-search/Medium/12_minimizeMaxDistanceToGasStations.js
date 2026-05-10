var solution = function (arr, k) {
  // Minimze the gap
  // Range of gap => 0 to max gap btw adjacent
  // can => is it possible to place atleast k gas stations

  let maxGap = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    maxGap = Math.max(maxGap, arr[i + 1] - arr[i]);
  }

  let l = 0;
  let r = maxGap;
  let res = r;

  while (r - l > 1e-6) {
    let mid = (r + l) / 2;

    if (can(arr, k, mid)) {
      res = mid;
      r = mid;
    } else {
      l = mid;
    }
  }

  return res;
};

var can = function (arr, k, maxDist) {
  let count = 0;

  for (i = 0; i < arr.length - 1; i++) {
    let gap = arr[i + 1] - arr[i];

    count += Math.floor(gap / maxDist);
  }

  return count <= k;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  k = 10;

let res = solution(arr, k);

console.log(res);
