// ----------------------------Solution 1-----------------------
var bruteForce = function(matrix){
  let n = matrix.length;
  let m = matrix[0].length;

  let zeroes = [];

  for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
      if(matrix[i][j] === 0){
        zeroes.push([i, j]);
      }
    }
  }

  for(let it of zeroes){
    let row = it[0];
    let col = it[1];

    for(let i=0; i<m; i++){
      matrix[row][i] = 0;
    }

    for(let i=0; i<n; i++){
      matrix[i][col] = 0;
    }
  }
}

// ----------------------Solution 2---------------------------
var optimal = function(matrix){
  let n = matrix.length;
  let m = matrix[0].length;

  let col0 = 1;

  for(let i=0; i<n; i++){
    if(matrix[i][0] === 0) col0 = 0;

    for(let j=1; j<m; j++){
      if(matrix[i][j] === 0){
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for(let i=n-1; i>=0; i--){
    for(let j=m-1; j>=1; j--){
      if(matrix[i][0] === 0 || matrix[0][j] === 0){
        matrix[i][j] = 0;
      }
    }

    if(col0 === 0){
      matrix[i][0] = 0;
    }
  }
}

let mat1 = [[1,1,1],[1,0,1],[1,1,1]];
let mat2 = [[1,1,1],[1,0,1],[1,1,1]];

bruteForce(mat1);
optimal(mat2);

console.log(mat1);
console.log(mat2);