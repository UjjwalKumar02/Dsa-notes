// -----------------------------Solution 1----------------------------
var bruteForce = function (n) {
  let res = [];
  generate("", 2 * n, res);
  return res;
};

var generate = function (curr, n, res) {
  if (curr.length === n) {
    if (isValid(curr)) {
      res.push(curr);
    }

    return;
  }
  generate(curr + "(", n, res);
  generate(curr + ")", n, res);
};

var isValid = function (str) {
  let balance = 0;

  for (let ch of str) {
    if (ch === "(") balance++;
    if (ch === ")") balance--;

    if (balance < 0) return false;
  }

  return balance === 0;
};

// ------------------------------Solution 2--------------------------------
var optimal = function (n) {
  let res = [];
  backtrack("", 0, 0, n, res);
  return res;
};

var backtrack = function (curr, open, close, n, res) {
  if (curr.length === 2 * n) {
    res.push(curr);
    return;
  }

  if (open < n) backtrack(curr + "(", open + 1, close, n, res);
  if (close < open) backtrack(curr + ")", open, close + 1, n, res);
};

let res1 = optimal(1);
let res2 = optimal(2);
let res3 = optimal(3);

console.log(res1);
console.log(res2);
console.log(res3);
