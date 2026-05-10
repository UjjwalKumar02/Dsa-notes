var solution = function (nums, m) {
  let maxi = 0;
  let sum = 0;
  for (let num of nums) {
    maxi = Math.max(maxi, num);
    sum += num;
  }

  let l = maxi;
  let r = sum;
  let res = sum;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (can(nums, m, mid)) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};

var can = function (nums, m, pages) {
  let cnt = 1;
  let sum = 0;

  for (let num of nums) {
    if (sum + num > pages) {
      cnt++;
      sum = 0;
    }

    sum += num;
  }

  return cnt <= m;
};

let nums = [12, 34, 67, 90],
  m = 2;

let res = solution(nums, m);

console.log(res);
