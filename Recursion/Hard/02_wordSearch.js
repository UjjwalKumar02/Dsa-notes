var solution = function (board, word) {
  let n = board.length;
  let m = board[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (backtrack(i, j, board, 0, word, n, m)) {
        return true;
      }
    }
  }

  return false;
};

var backtrack = function (i, j, board, idx, word, n, m) {
  if (idx === word.length) {
    return true;
  }

  if (i >= n || i < 0 || j >= m || j < 0 || board[i][j] !== word[idx]) {
    return false;
  }

  let temp = board[i][j];
  board[i][j] = "#";

  let found =
    backtrack(i - 1, j, board, idx + 1, word, n, m) ||
    backtrack(i + 1, j, board, idx + 1, word, n, m) ||
    backtrack(i, j - 1, board, idx + 1, word, n, m) ||
    backtrack(i, j + 1, board, idx + 1, word, n, m);

  board[i][j] = temp;

  return found;
};
