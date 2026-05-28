var solution = function (n) {
  let res = [];
  generate(n, "", res);
  return res;
};

var generate = function (n, curr, res) {
  if (curr.length === n) {
    res.push(curr);
    return;
  }

  generate(n, curr + "0", res);

  if (curr.length === 0 || curr[curr.length - 1] !== "1") {
    generate(n, curr + "1", res);
  }
};

let res = solution(3);

console.log(res);
