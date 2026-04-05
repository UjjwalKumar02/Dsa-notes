// ------------------------Solution 1--------------------------
var bruteForce = function(s, t){
  if(s.length !== t.length) return false;

  let s1 = s.split("").sort().join("");
  let s2 = t.split("").sort().join("");

  return s1 === s2;
}

// ------------------------------Solution 2---------------------------
var optimal = function(s, t){
  if(s.length !== t.length) return false;

  let mpp = new Map();

  for(let char of s){
    mpp.set(char, (mpp.get(char) || 0) + 1);
  }

  for(let char of t){
    if(!mpp.has(char)) return false;
    let cnt = mpp.get(char) - 1;
    if(cnt < 0) return false;
    mpp.set(char, cnt);
  }

  return true;
}

let s = "anagram", t = "nagaram";

let res1 = bruteForce(s, t);
let res2 = optimal(s, t);

console.log(res1);
console.log(res2);