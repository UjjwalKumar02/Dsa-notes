/**
 *
 * @param {string} s
 * @returns {string}
 */
var solution = function (s) {
  let stack = [];
  let res = "";

  let oprands = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (let c of s) {
    if (oprands.includes(c)) {
      res += c;
    } else if (c === "(") {
      stack.push(c);
    } else if (c === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        res += stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] !== "(" &&
        (precendence(stack[stack.length - 1]) > precendence(c) ||
          (precendence(stack[stack.length - 1]) === precendence(c) &&
            c !== "^"))
      ) {
        res += stack.pop();
      }
      stack.push(c);
    }
  }

  while (stack.length > 0) {
    res += stack.pop();
  }

  return res;
};

var precendence = function (op) {
  if (op === "^") return 3;
  else if (op === "*" || op === "/") return 2;
  else if (op === "+" || op === "-") return 1;
  else return 0;
};

let expression = "a+b*c^d-e^f*g+h";

let res = solution(expression);

console.log(res);
