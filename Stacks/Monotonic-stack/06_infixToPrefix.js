var solution = function (s) {
  // infix to postfix

  let st = [];
  let postfix = "";

  for (let c of s) {
    if (/[a-zA-Z0-9]/.test(c)) {
      postfix += c;
    } else if (c === "(") {
      st.push(c);
    } else if (c === ")") {
      while (st.length > 0 && st[st.length - 1] !== "(") {
        postfix += st.pop();
      }
      st.pop();
    } else {
      while (st.length > 0 && precedence(c) <= precedence(st[st.length - 1])) {
        postfix += st.pop();
      }
      st.push(c);
    }
  }

  while (st.length > 0) {
    postfix += st.pop();
  }

  // postfix to prefix

  let st2 = [];

  for (let c of postfix) {
    if (/[a-zA-Z0-9]/.test(c)) {
      st2.push(c);
    } else {
      let op2 = st2.pop();
      let op1 = st2.pop();

      st2.push(c + op1 + op2);
    }
  }

  return st2[0];
};

var precedence = function (op) {
  if (op === "^") return 3;
  else if (op === "*" || op === "/") return 2;
  else if (op === "+" || op === "-") return 1;
  else return -1;
};

let s1 = "(a+b)*c";
let s2 = "a+b*c";

let postfix1 = solution(s1);
let postfix2 = solution(s2);

console.log(postfix1);
console.log(postfix2);
