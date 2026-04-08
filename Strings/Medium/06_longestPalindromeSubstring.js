// ------------------Solution 1-----------------------
var twoLoops = function(s){
  let n = s.length;
  let resStr = "";

  for(let i=0; i<n; i++){
    let str = "";

    for(let j=i; j<n; j++){
      str += s[j];

      let result = checkPalindrome(str);

      if(result && resStr.length < str.length){
        resStr = str;
      }
    }
  }

  return resStr;
}

var checkPalindrome = function(str){
  let l = 0;
  let r = str.length - 1;

  while(l < r){
    if(str[l] !== str[r]){
      return false;
    }
    l++;
    r--;
  }

  return true;
}

// -----------------------Solution 2------------------------
var optimal = function(s){
  const expand = (l, r) => {
    while(l >= 0 &&  r < s.length &&  s[l] === s[r]){
      l--;
      r++;
    }

    return r-l-1;
  }

  let maxLen = 0;
  let start = 0;

  for(let i=0; i<s.length; i++){
    let odd = expand(i, i);
    let even = expand(i, i+1);

    let len = Math.max(odd, even);

    if(len > maxLen){
      maxLen = len;
      start = i - Math.floor((len-1)/2);
    }
  }

  return s.substring(start, start + maxLen);
}

let str1 = "babad";
let str2 = "babad";

let res1 = twoLoops(str1);
let res2 = optimal(str1);

console.log(res1);
console.log(res2);