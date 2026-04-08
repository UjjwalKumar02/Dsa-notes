// ------------------------Solution 1-------------------------
var bruteForce = function(s){
  let n = s.length;
  if(n === 0) return 0;

  s = s.trim();

  let isNeg = s[0] === "-";
  let isPos = s[0] === "+";

  let mpp = new Map();
  for(let i=0; i<=9; i++){
    mpp.set(i.toString(), 0);
  }
  let resStr = "";

  if(isNeg || isPos){
    for(let i=1; i<n; i++){
      if(!mpp.has(s[i])) break;

      resStr += s[i];
    }
  } else {
    for(let char of s){
      if(!mpp.has(char)) break;

      resStr += char;
    }
  }

  const maxi = 2**31;

  let num = Number(resStr);

  if(num >= maxi){
    num = isNeg ? maxi : maxi-1;
  }

  return isNeg ? -num : num;
}

// ------------------Solution 2-------------------------
var optimal = function(s){
  s = s.trim();

  let n = s.length;
  if(n === 0) return 0;

  let i = 0;
  let sign = 1;
  let result = 0;
  let maxi = 2**31;
  let mini = -(2**31);

  if(s[0] === "-"){
    sign = -1;
    i++;
  } else if(s[0] === "+"){
    i++;
  }

  while(i < n && s[i] >= "0" && s[i] <= "9"){
    result = result*10 + (s[i] - "0") ;

    if(sign * result <= mini) return mini;
    if(sign * result >= maxi) return maxi - 1;
    i++;
  }

  return sign * result;
}

let s1 = "1337c0d3";
let s2 = "1337c0d3";

let res1 = bruteForce(s1);
let res2 = optimal(s2);

console.log(res1);
console.log(res2);