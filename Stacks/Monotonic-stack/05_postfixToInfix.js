var solution = function (s) {
  let stack = [];

  for (let c of s) {
    if (/[a-zA-Z0-9]/.test(c)) {
      stack.push(c);
    } else {
      let op2 = stack.pop();
      let op1 = stack.pop();

      stack.push(`(${op1}${c}${op2})`);
    }
  }

  return stack[0];
};

let s = "abc*+";

let res = solution(s);

console.log(res);
