var solution = function (nums) {
  let candidate = null;
  let cnt = 0;

  for (let num of nums) {
    if (cnt === 0) {
      candidate = num;
    }

    cnt += num === candidate ? 1 : -1;
  }

  return candidate;
};
