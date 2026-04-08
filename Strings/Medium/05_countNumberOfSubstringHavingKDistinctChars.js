var bruteForce = function (s, k) {
  let n = s.length;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    let st = new Set();

    for (let j = i; j < n; j++) {
      st.add(s[j]);
      if (st.size === k) cnt++;
      else if (st.size > k) break;
    }
  }

  return cnt;
};

// ---------------------------Solution 2---------------------------
var atMostK = function (s, k) {
  let n = s.length;
  let l = 0;
  let mpp = new Map();
  let count = 0;

  for (let r = 0; r < n; r++) {
    mpp.set(s[r], (mpp.get(s[r]) || 0) + 1);

    while (mpp.size > k) {
      mpp.set(s[l], mpp.get(s[l]) - 1);

      if (mpp.get(s[l]) === 0) {
        mpp.delete(s[l]);
      }
      l++;
    }

    count += r - l + 1;
  }

  return count;
};
var optimal = function (s, k) {
  return atMostK(s, k) - atMostK(s, k - 1);
};

let s = "helloworld";
let res1 = bruteForce(s, 3);
let res2 = optimal(s, 3);

console.log(res1);
console.log(res2);
