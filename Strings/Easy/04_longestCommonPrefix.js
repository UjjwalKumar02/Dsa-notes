// ------------------------Solution 1--------------------------
var bruteForce = function(strs){
  let mini = 202;

  for(let i=1; i<strs.length; i++){
    let common = commonString(strs[i-1], strs[i]);

    mini = Math.min(mini, common.length);
  }

  return mini === 0 ? "" : strs[0].slice(0,mini);
}

var commonString = function(str1, str2){
  let res = "";
  let i = 0;
  let n = Math.min(str1.length, str2.length);

  while(i < n){
    if(str1[i] !== str2[i]){
      break;
    }

    res += str1[i];
    i++;
  }

  return res;
}

// --------------------------------Solution 2-----------------------------
var optimal = function(strs){
  if(strs.length === 0) return "";

  for(let i=0; i<strs[0].length; i++){
    const char = strs[0][i];

    for(let j=0; j<strs.length; j++){
      if(i > strs[j].length || strs[j][i] !== char){
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}

let strs = ["flower","flow","flight"];

let res1 = bruteForce(strs);
let res2 = optimal(strs);

console.log(res1);
console.log(res2);