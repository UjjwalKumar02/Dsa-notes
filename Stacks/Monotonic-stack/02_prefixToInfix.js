var solution = function (s) {
  let stack = [];
  let oprands = "abcdefghijklmnopqrstuvwxyz0123456789";
  let oprators = "^*/+-";

  for (let r = s.length - 1; r >= 0; r--) {
    if (oprands.includes(s[r])) {
      stack.push(s[r]);
    } else if (oprators.includes(s[r])) {
      let op2 = stack.pop();
      let op1 = stack.pop();

      let temp = `(${op1}${s[r]}${op2})`;

      stack.push(temp);
    }
  }

  return stack[stack.length - 1];
};

let expression = "^b+ab";

let res = solution(expression);

console.log(res);
