var solution = function(x, n){
  if(n < 0){
    return solution(1/x, -n);
  }

  return helper(x, n);
};

var helper = function(x, n){
  if(n === 0) return 1.0;
  if(n === 1) return x;

  if(n % 2 === 0){
    return helper(x * x, n/2);
  }

  return x * helper(x, n-1);
};

let res1 = solution(2, 3);
let res2 = solution(2, 1);
let res3 = solution(2, 4);
let res4 = solution(2, 5);
let res5 = solution(2, 0);
let res6 = solution(2, -1);
let res7 = solution(2, -2);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);