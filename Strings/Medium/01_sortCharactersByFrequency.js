var solution = function(s){
  let mpp = new Map();
  for(let char of s){
    mpp.set(char, (mpp.get(char) || 0) + 1);
  }

  let newMap = new Map([...mpp.entries()].sort((a, b) => b[1] - a[1]));

  let res = "";

  for(let [key, val] of newMap){
    for(let i=0; i<val; i++){
      res += key;
    }
  }

  return res;
}

let str = "tree";
let res = solution(str);

console.log(res);