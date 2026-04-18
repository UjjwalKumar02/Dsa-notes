var solution = function (s) {
  let stack = [];

  for (let c of s) {
    if (/[a-zA-Z0-9]/.test(c)) {
      stack.push(c);
    } else {
      let op2 = stack.pop();
      let op1 = stack.pop();

      stack.push(c + op1 + op2);
    }
  }

  return stack[stack.length - 1];
};

let expression = "abc*+d-";

let res = solution(expression);

console.log(res);
