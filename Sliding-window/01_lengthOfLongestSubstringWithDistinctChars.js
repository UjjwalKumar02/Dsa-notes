var solution = function (s) {
  let l = 0;
  let mpp = new Map();
  let maxi = 0;

  for (let r = 0; r < s.length; r++) {
    mpp.set(s[r], (mpp.get(s[r]) || 0) + 1);

    while (mpp.get(s[r]) > 1) {
      mpp.set(s[l], mpp.get(s[l]) ? mpp.get(s[l]) - 1 : -1);
      l++;
    }

    maxi = Math.max(maxi, r - l + 1);
  }

  return maxi;
};

let s = "abcabcbb";

let res = solution(s);
console.log(res);
