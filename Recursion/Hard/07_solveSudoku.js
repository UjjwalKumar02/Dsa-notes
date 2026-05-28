var solution = function (board) {
  recursion(0, 0, board);
};

var recursion = function (row, col, board) {
  if (row === 9) return true;

  if (col === 9) {
    return recursion(row + 1, 0, board);
  }

  if (board[row][col] !== ".") {
    return recursion(row, col + 1, board);
  }

  for (let i = 1; i <= 9; i++) {
    let char = i.toString();

    if (isSafe(char, row, col, board)) {
      board[row][col] = char;

      if (recursion(row, col + 1, board)) {
        return true;
      }

      board[row][col] = ".";
    }
  }

  return false;
};

var isSafe = function (char, row, col, board) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === char) return false;
  }

  for (let i = 0; i < 9; i++) {
    if (board[i][col] === char) return false;
  }

  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === char) {
        return false;
      }
    }
  }

  return true;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solution(board);
console.log(board);
