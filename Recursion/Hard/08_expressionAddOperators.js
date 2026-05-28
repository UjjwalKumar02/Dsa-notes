var solution = function (num, target) {
  let res = [];
  dfs(0, "", 0, 0, res, num, target);
  return res;
};

var dfs = function (idx, exp, curr_value, prev_op, res, num, target) {
  if (idx === num.length) {
    if (curr_value === target) {
      res.push(exp);
    }
    return;
  }

  for (let i = idx; i < num.length; i++) {
    if (i > idx && num[idx] === "0") continue;

    let temp = num.slice(idx, i + 1);
    let curr_num = parseInt(temp);
    console.log(temp);

    if (idx === 0) {
      dfs(i + 1, exp + temp, curr_num, curr_num, res, num, target);
    } else {
      dfs(
        i + 1,
        exp + "+" + temp,
        curr_value + curr_num,
        curr_num,
        res,
        num,
        target,
      );

      dfs(
        i + 1,
        exp + "-" + temp,
        curr_value - curr_num,
        -curr_num,
        res,
        num,
        target,
      );

      dfs(
        i + 1,
        exp + "*" + temp,
        curr_value - prev_op + prev_op * curr_num,
        prev_op * curr_num,
        res,
        num,
        target,
      );
    }
  }
};

let res = solution("123", 7);
console.log(res);
