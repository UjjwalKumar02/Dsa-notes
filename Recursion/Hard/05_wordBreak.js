var solution = function(s, dict){
  return recursion("", s, dict);
};

var recursion = function(curr, s, dict){
  if(curr === s){
    return true;
  }

  if(curr.length > s.length) return false;

  for(let word of dict){
    if(recursion(curr + word, s, dict)){
      return true;
    }
  }

  return false;
};

let s = "takeuforward",
  wordDict = ["take", "forward", "you", "u"];

let res = solution(s, wordDict);
console.log(res);
