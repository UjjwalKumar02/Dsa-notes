// -------------------------Solution 1------------------------
var bruteForce = function(matrix){
  let n = matrix.length;

  let temp = matrix.map((row) => [...row]);

  for(let i=0; i<n; i++){
    let row = n-1;

    for(let j=0; j<n; j++){
      matrix[i][j] = temp[row][i];
      row--;
    }
  }
} 

// ---------------------------Solution 2-------------------------
var optimal = function(matrix){
  let n = matrix.length;

  for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for(let i=0; i<n; i++){
    let stack = [];

    for(let j=0; j<n; j++){
      stack.push(matrix[i][j]);
    }

    for(let j=0; j<n; j++){
      matrix[i][j] = stack.pop();
    }
  }
}

let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
let matrix2 = [[1,2,3],[4,5,6],[7,8,9]];

bruteForce(matrix1);
optimal(matrix2);

console.log(matrix1);
console.log(matrix2);