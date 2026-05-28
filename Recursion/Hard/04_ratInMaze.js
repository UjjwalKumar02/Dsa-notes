var solution = function(grid){
  let n = grid.length;

  let res = [];
  helper(0, 0, "", res, grid, n);
  return res.length === 0 ? -1 : res;
};

var helper = function(i, j, curr, res, grid, n){
  if(i >= n || i<0 || j >= n || j<0 || grid[i][j] === 0){
    return;
  }

   if(i === n-1 && j === n-1){
    res.push(curr);
    return;
  }

  grid[i][j] = 0;

  helper(i-1, j, curr + "U", res, grid, n);
  helper(i+1, j, curr + "D", res, grid, n);
  helper(i, j-1, curr + "L", res, grid, n);
  helper(i, j+1, curr + "R", res, grid, n);

  grid[i][j] = 1;
};

let  grid = [ [1, 0] , [1, 0] ];

let res = solution(grid);
console.log(res);