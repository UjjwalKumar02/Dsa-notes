var solution = function (s) {
  let res = [];
  backtrack(0, [], res, s);
  return res;
};

var backtrack = function (idx, curr, res, s) {
  if (idx === s.length) {
    res.push([...curr]);
    return;
  }

  for (let i = idx; i < s.length; i++) {
    if (isPalindrome(s.substring(idx, i + 1))) {
      curr.push(s.substring(idx, i + 1));
      backtrack(i + 1, curr, res, s);
      curr.pop();
    }
  }
};

var isPalindrome = function (str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};

let res = solution("aba");
console.log(res);
