// Given a string s and an integer k.
// Find the length of the longest substring with at most k distinct characters.
// Input : s = "aababbcaacc" , k = 2
// Output : 6
// Input : s = "abcddefg" , k = 3
// Output : 4
// Input : s = "abccab" , k = 4
// Output : 6

// -----------------------------Solution 1--------------------------
var twoLoops = function(s, k){
  let n = s.length;
  let maxLen = 0;

  for(let i=0; i<n; i++){
    let st = new Set();

    for(let j=i; j<n; j++){
      st.add(s[j]);
      
      if(st.size > k){
        break;
      }

      maxLen = Math.max(maxLen, j-i+1);
    }
  }

  return maxLen;
}

// -----------------------------Solution 2-----------------------------
var slidingWindow = function(s, k){
  let n = s.length;
  let l = 0;
  let mpp = new Map();
  let maxLen = 0;

  for(let r=0; r<n; r++){
    mpp.set(s[r], (mpp.get(s[r]) || 0) + 1);

    while(mpp.size > k){
      let freq = mpp.get(s[l]) - 1;
      mpp.set(s[l], freq);
      if(freq === 0){
        mpp.delete(s[l]);
      }
      l++;
    }

    maxLen = Math.max(maxLen, r-l+1);
  }

  return maxLen;
}

let s1 = "aababbcaacc" , k1 = 2
let s2 = "abcddefg" , k2 = 3
let s3 = "abccab" , k3 = 4

let res1 = slidingWindow(s1, k1);
let res2 = slidingWindow(s2, k2);
let res3 = slidingWindow(s3, k3);
let res4 = twoLoops(s1, k1);
let res5 = twoLoops(s2, k2);
let res6 = twoLoops(s3, k3);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);