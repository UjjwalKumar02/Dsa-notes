var solution = function (nums, threshold) {
  let maxi = 0;
  for (let num of nums) {
    maxi = Math.max(maxi, num);
  }

  let l = 1;
  let r = maxi;
  let res = maxi;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    let possible = isPossible(nums, mid, threshold);

    if (possible) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};

var isPossible = function (nums, mid, threshold) {
  let sum = 0;
  for (let num of nums) {
    sum += Math.floor((num + mid - 1) / mid);
  }

  return sum <= threshold;
};

let nums = [44, 22, 33, 11, 1],
  threshold = 5;

let res = solution(nums, threshold);

console.log(res);
