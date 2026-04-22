var solution = function (M) {
  let candidate = 0;

  for (let i = 0; i < M.length; i++) {
    if (M[candidate][i] === 1) {
      candidate = i;
    }
  }

  for (let i = 0; i < M.length; i++) {
    if (i === candidate) continue;

    if (M[candidate][i] === 1 || M[i][candidate] === 0) {
      return -1;
    }
  }

  return candidate;
};

let M = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
];

let res = solution(M);

console.log(res);
