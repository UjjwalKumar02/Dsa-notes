// ------------------------------Solution 1-------------------------
var bruteForce = function(s){
  let n = s.length;
  let res = 0;

  for(let i=0; i<n; i++){
    let str = "";

    for(let j=i; j<n; j++){
      str += s[j];
      let beauty = calcBeauty(str);
      res += beauty;
    }
  }

  return res;
}

var calcBeauty = function(str){
  let mpp = new Map();

  for(let char of str){
    mpp.set(char, (mpp.get(char) || 0) + 1);
  }

  let maxi = 0;
  let mini = str.length;

  for(let val of mpp.values()){
    maxi = Math.max(maxi, val);
    mini = Math.min(mini, val);
  }

  return maxi-mini;
}

// -----------------------------Solution 2----------------------
var optimal = function(s){
  let n = s.length;
  let res = 0;

  for(let i=0; i<n; i++){
    let freq = new Array(26).fill(0);

    for(let j=i; j<n; j++){
      let idx = s[j].charCodeAt(0) - 97;
      freq[idx]++;

      let maxi = 0;
      let mini = Infinity;

      for(let k=0; k<26; k++){
        if(freq[k] > 0){
          maxi = Math.max(maxi, freq[k]);
          mini = Math.min(mini, freq[k]);
        }
      }

      res += maxi-mini;
    }
  }

  return res;
}


let s1 = "aabcbaa";
let s2 = "aabcbaa";

let res1 = bruteForce(s1);
let res2 = optimal(s2);

console.log(res1);
console.log(res2);