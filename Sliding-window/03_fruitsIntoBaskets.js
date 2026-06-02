// ------------------------Solution 1-----------------------
var bruteForce = function (fruits) {
  let n = fruits.length;
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    let st = new Set();

    for (let j = i; j < n; j++) {
      st.add(fruits[j]);

      if (st.size > 2) break;

      maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  return maxLen;
};

// -----------------------------Solution 2-----------------------------
var optimal = function (fruits) {
  let l = 0;
  let mpp = new Map();
  let maxi = 0;

  for (let r = 0; r < fruits.length; r++) {
    mpp.set(fruits[r], (mpp.get(fruits[r]) || 0) + 1);

    while (mpp.size > 2) {
      let left = mpp.get(fruits[l]);

      if (left - 1 === 0) {
        mpp.delete(fruits[l]);
      } else {
        mpp.set(fruits, left - 1);
      }

      l++;
    }

    maxi = Math.max(maxi, r - l + 1);
  }

  return maxi;
};

let fruits1 = [1, 2, 1];
let fruits2 = [1, 2, 3, 2, 2];
let fruits3 = [1, 2, 3, 4, 5];

let res1 = bruteForce(fruits1);
let res2 = optimal(fruits1);
let res3 = bruteForce(fruits2);
let res4 = optimal(fruits2);
let res5 = bruteForce(fruits3);
let res6 = optimal(fruits3);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
