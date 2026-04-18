var solution = function (s) {
  let mpp = new Map();
  mpp.set(")", "(");
  mpp.set("]", "[");
  mpp.set("}", "{");

  let stack = [];

  for (let c of s) {
    // closing tag
    if (mpp.has(c)) {
      if (stack.length > 0 && stack[stack.length - 1] === mpp.get(c)) {
        stack.pop();
      } else {
        return false;
      }
    }
    // opening tag
    else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};

let s = "([)]";

let res = solution(s);

console.log(res);
