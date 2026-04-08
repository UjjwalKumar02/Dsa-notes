var solution = function(s){
  let depth = 0;
  let maxi = 0;

  for(let char of s){
    if(char === "(") depth++;
    else if(char === ")") depth--;

    maxi = Math.max(maxi, depth);
  }

  return maxi;
}

let s = "(1+(2*3)+((8)/4))+1";
let res = solution(s);

console.log(res);