var solution = function (nums, k) {
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

    if (can(nums, k, mid)) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};

var can = function (nums, k, maxSum) {
  let cnt = 1;
  let sum = 0;

  for (let num of nums) {
    if (sum + num > maxSum) {
      cnt++;
      sum = 0;
    }

    sum += num;
  }

  return cnt <= k;
};


