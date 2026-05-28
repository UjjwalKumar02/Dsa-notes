var solution = function(n){
  let board = Array.from({length: n}, () => Array(n).fill("."));

  let res = [];
  recursion(0, board, res, n);
  return res;
};

var recursion = function(col, board, res, n){
  if(col === n){
    let temp = board.map(row => row.join(""));
    res.push(temp);
    return;
  }

  for(let row=0; row<n; row++){
    if(isSafe(row, col, board, n)){
      board[row][col] = "Q";
      recursion(col + 1, board, res, n);
      board[row][col] = ".";
    }
  }
};

var isSafe = function(row, col, board, n){
  for(let i=0; i<n; i++){
    if(board[row][i] === "Q") return false;
  }

  for(let i=row, j=col; i>=0 && j>=0; i--, j--){
    if(board[i][j] === "Q") return false;
  }
  
  for(let i=row, j=col; i<n && j>=0; i++, j--){
    if(board[i][j] === "Q") return false;
  }

  return true;
};