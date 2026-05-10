var solution = function (A, B, C) {
  // Minimize the time taken
  // Time taken = Max(timetaken by a painter)
  // B * Elements of C 's subarray

  // range of time => max of c * b to sum of c*b

  let maxi = 0;
  let sum = 0;
  for (let num of C) {
    maxi = Math.max(maxi, num);
    sum += num;
  }

  maxi = maxi * B;
  sum = sum * B;

  let l = maxi;
  let r = sum;
  let res = sum;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (can(A, B, C, mid)) {
      res = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return res;
};

var can = function (A, B, C, maxTime) {
  let cnt = 1;
  let sum = 0;

  for (let num of C) {
    if ((sum + num) * B > maxTime) {
      cnt++;
      sum = 0;
    }

    sum += num;
  }

  return cnt <= A;
};

let A = 10,
  B = 1,
  C = [1, 8, 11, 3];

let res = solution(A, B, C);

console.log(res);
