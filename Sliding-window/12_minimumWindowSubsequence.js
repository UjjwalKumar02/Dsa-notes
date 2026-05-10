// --------------------------Solution 1----------------------
class Solution {
  minWindow(s1, s2) {
    let n = s1.length;
    let minLen = Infinity;
    let minIndex = Infinity;
    let res = "";

    for (let i = 0; i < n; i++) {
      let str = "";

      for (let j = i; j < n; j++) {
        str += s1[j];
        if (this.validate(str, s2)) {
          if (str.length < minLen || (str.length === minLen && i < minIndex)) {
            minLen = str.length;
            minIndex = i;
            res = str;
          }
        }
      }
    }

    if (minLen === Infinity) return "";
    return res;
  }

  validate(str, s2) {
    let i = 0;

    for (let ch of str) {
      if (ch === s2[i]) {
        i++;
      }
      if (i === s2.length) {
        return true;
      }
    }

    return false;
  }
}

// -----------------------------Solution 2---------------------------
var optimal = function (s1, s2) {
  let n = s1.length;
  let m = s2.length;

  let minLen = Infinity;
  let startIndex = 0;

  let i = 0;

  while (i < n) {
    let j = 0;

    while (i < n) {
      if (s1[i] === s2[j]) {
        j++;
      }
      i++;
      if (j === m) break;
    }

    if (i === n) break;

    let end = i - 1;
    j = m - 1;
    i--;

    while (i >= 0) {
      if (s1[i] === s2[j]) {
        j--;
      }
      i--;
      if (j < 0) break;
    }

    let start = i + 1;

    if (end - start + 1 < minLen) {
      minLen = end - start + 1;
      startIndex = start;
    }

    i = start + 1;
  }

  return minLen === Infinity
    ? ""
    : s1.substring(startIndex, startIndex + minLen);
};

let s1 = "abcdebdde",
  s2 = "bde";

// let res = new Solution();
// let ans = res.minWindow(s1, s2);

let res2 = optimal(s1, s2);

// console.log(ans);
console.log(res2);
