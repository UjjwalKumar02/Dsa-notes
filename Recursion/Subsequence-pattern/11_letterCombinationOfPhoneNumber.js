var solution = function(digits){
  if(digits.length === 0) return [];

  const mpp = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

  let res = [];
  helper(0, "", res, digits, mpp);
  return res;
};

var helper = function(idx, curr, res, digits, mpp){
  if(curr.length === digits.length){
    res.push(curr);
    return;
  }
  
  let str = mpp[digits[idx] - "0"];

  for(let char of str){
    helper(idx + 1, curr + char, res, digits, mpp);
  }
};

let digits = "23";
let res = solution(digits);
console.log(res);