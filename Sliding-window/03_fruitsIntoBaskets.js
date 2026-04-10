// ------------------------Solution 1-----------------------
var bruteForce = function(fruits){
  let n = fruits.length;
  let maxLen = 0;

  for(let i=0; i<n; i++){
    let st = new Set();

    for(let j=i; j<n; j++){
      st.add(fruits[j]);

      if(st.size > 2) break;

      maxLen = Math.max(maxLen, j-i+1);
    }
  }

  return maxLen;
}

// -----------------------------Solution 2-----------------------------
var optimal = function(fruits){
  let n = fruits.length;
  let l = 0;
  let maxLen = 0;
  let st = new Set();

  for(let r=0; r<n; r++){
    st.add(fruits[r]);

    while(st.size > 2){
      st.delete(fruits[l]);
      l++;
    }

    maxLen = Math.max(maxLen, r-l+1);
  }

  return maxLen;
}

let fruits1 = [1, 2, 1];
let fruits2 = [1, 2, 3, 2, 2];
let fruits3 = [1, 2, 3, 4, 5];

let res1 = optimal(fruits1);
let res2 = optimal(fruits2);
let res3 = optimal(fruits3);

console.log(res1);
console.log(res2);
console.log(res3);