// ------------------------------Solution 1--------------------
var twoLoops = function(s, k){
  let n = s.length;
  let maxLen = 0;

  for(let i=0; i<n; i++){
    let str = "";

    for(let j=i; j<n; j++){
      str += s[j];

      if(str.length - maxFreq(str) > k){
        break;
      }

      maxLen = Math.max(maxLen, j-i+1);
    }
  }

  return maxLen;
}

var maxFreq = function(str){
  if(str === 0) return 0;

  let mpp = new Map();
  for(let char of str){
    mpp.set(char, (mpp.get(char) || 0) + 1);
  }

  let res = 0;
  for(let val of mpp.values()){
    res = Math.max(res, val);
  }

  return res;
}

// ------------------------------Solution 2----------------------
var slidingWindow = function(s, k){
  let n = s.length;
  let l = 0;
  let maxLen = 0;
  let str = "";

  for(let r=0; r<n; r++){
    str += s[r];

    while(str.length - maxFreq(str) > k){
      str = str.slice(1);
      l++;
    }

    maxLen = Math.max(maxLen, r-l+1);
  }

  return maxLen;
}

// -----------------------Solution 3------------------------------
var optimal = function(s, k){
  let n = s.length;
  let l = 0;
  let mpp = new Map();
  let maxFreq = 0;
  let maxLen = 0;

  for(let r=0; r<n; r++){
    mpp.set(s[r], (mpp.get(s[r]) || 0) + 1);

    maxFreq = Math.max(maxFreq, mpp.get(s[r]));

    while(r-l+1 - maxFreq > k){
      mpp.set(s[l], mpp.get(s[l]) - 1);
      l++;
    }

    maxLen = Math.max(maxLen, r-l+1);
  }

  return maxLen;
}

let s1 = "AABABBA";
let s2 = "AABABBA";
let s3 = "AABABBA";

let res1 = twoLoops(s1, 1);
let res2 = slidingWindow(s2, 1);
let res3 = optimal(s3, 1);

console.log(res1);
console.log(res2);
console.log(res3);