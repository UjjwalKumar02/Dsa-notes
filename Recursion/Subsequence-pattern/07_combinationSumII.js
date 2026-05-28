// --------------------------Solution 1------------------------------
var brute = function (candidates, target) {
  let res = [];
  let curr = [];

  candidates.sort((a, b) => a - b);
  recursion(0, target, curr, candidates, res);

  return res;
};

var bruteRecursion = function (idx, left, curr, arr, res) {
  if (left === 0) {
    let temp = [...curr];

    if (JSON.stringify(res).includes(JSON.stringify(temp)) === false) {
      res.push(temp);
    }

    return;
  }

  if (left < 0 || idx >= arr.length) return;

  curr.push(arr[idx]);
  bruteRecursion(idx + 1, left - arr[idx], curr, arr, res);
  curr.pop();

  bruteRecursion(idx + 1, left, curr, arr, res);
};

// ---------------------------------Solution 2-------------------------
var solution = function (candidates, target) {
  let res = [];
  let curr = [];

  candidates.sort((a, b) => a - b);
  recursion(0, target, curr, candidates, res);

  return res;
};

var recursion = function (idx, left, curr, arr, res) {
  if (left === 0) {
    res.push([...curr]);
    return;
  }

  if (left < 0 || idx >= arr.length) return;

  for (let i = idx; i < arr.length; i++) {
    if (i > idx && arr[i] === arr[i - 1]) continue;

    if (arr[i] > left) break;

    curr.push(arr[i]);
    recursion(i + 1, left - arr[i], curr, arr, res);
    curr.pop();
  }
};

let candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;

let res1 = brute(candidates, target);
let res2 = solution(candidates, target);

console.log(res1);
console.log(res2);
