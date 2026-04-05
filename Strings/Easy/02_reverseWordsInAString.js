// -----------------------Solution 1--------------------------
var bruteForce = function(s){
  let res = "";
  let temp = "";

  s = s.trim().replace(/\s+/g, " ");

  for(let i=s.length-1; i>=0; i--){
    if(s[i] === " "){
      res += temp + " ";
      temp = "";
    }
    else {
      temp = s[i] + temp;
    }
  }

  res += temp;

  return res;
}

// -----------------------Solution 2----------------------------------
var optimal = function(s){
  return s.trim().split(/\s+/g).reverse().join(" ");
}

let str = "  hello world  ";

let res1 = bruteForce(str);
let res2 = optimal(str);

console.log(res1);
console.log(res2);