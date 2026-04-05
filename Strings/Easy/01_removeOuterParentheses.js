var solution = function(s){
  let res = "";
  let depth = 0;

  for(let char of s){
    if(char === "("){
      if(depth > 0) res += char;
      depth++;
    }
    else if(char === ")"){
      depth--;
      if(depth > 0) res += char;
    }
  }

  return res;
}

let str = "(()())(())";
let res = solution(str);

console.log(res);