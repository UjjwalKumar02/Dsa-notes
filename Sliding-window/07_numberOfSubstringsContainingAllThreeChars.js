// --------------------------Solution 1---------------------------
var twoLoops = function(s){
  let n = s.length;
  let cnt = 0;
  let max = (n * (n+1))/2

  for(let i=0; i<n; i++){
    let st = new Set();

    for(let j=i; j<n; j++){
      st.add(s[j]);

      if(st.has("a") && st.has("b") && st.has("c")){
        break;
      }

      cnt++;
    }
  }

  return max - cnt;
}

// ------------------------Solution 2----------------------------------------
var slidingWindow = function(s){
  let n = s.length;
  let l = 0;
  let mpp = new Map();
  let cnt = 0;
  let max = (n * (n+1))/2;

  for(let r=0; r<n; r++){
    mpp.set(s[r], (mpp.get(s[r]) || 0) + 1);

    while(mpp.has("a") && mpp.has("b") && mpp.has("c")){
      let freq = mpp.get(s[l]) - 1;
      mpp.set(s[l], freq);
      if(freq === 0){
        mpp.delete(s[l]);
      }
      l++;
    }

    cnt += r-l+1;
  }

  return max - cnt;
}

// ---------------------Solution 3--------------------------------------
var optimal = function(s){
  let n = s.length;
  let l = 0;
  let res = 0;
  let freq = {a: 0, b: 0, c: 0};

  for(let r=0; r<n; r++){
    freq[s[r]]++;

    while(freq["a"] > 0 && freq["b"] > 0 && freq["c"] > 0){
      res += n - r;
      freq[s[l]]--;
      l++;
    }
  }

  return res;
}

let s1 = "abcabc";
let s2 = "abcabc";
let s3 = "abcabc";

let res1 = twoLoops(s1);
let res2 = slidingWindow(s2);
let res3 = optimal(s3);

console.log(res1);
console.log(res2);
console.log(res3);