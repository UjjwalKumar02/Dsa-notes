// --------------------------------------Solution 1-------------------------------------
var bruteForce = function (s) {
  // prefix to infix
  let st = [];
  let operands = "abcdefghijklmnopqrstuvwxyz0123456789";
  let operators = "^*/+-";

  for (let r = s.length - 1; r >= 0; r--) {
    if (operands.includes(s[r])) {
      st.push(s[r]);
    } else if (operators.includes(s[r])) {
      let op2 = st.pop();
      let op1 = st.pop();

      st.push(`(${op2}${s[r]}${op1})`);
    }
  }

  let infix = st[st.length - 1];

  // infix to postfix

  let st2 = [];
  let res = "";

  for (let c of infix) {
    if (operands.includes(c)) {
      res += c;
    } else if (c === "(") {
      st2.push(c);
    } else if (c === ")") {
      while (st2.length > 0 && st2[st2.length - 1] !== "(") {
        res += st2.pop();
      }
      st2.pop();
    } else {
      while (
        st2.length > 0 &&
        st2[st2.length - 1] !== "(" &&
        (precedence(c) < precedence(st2[st2.length - 1]) ||
          (precedence(c) === precedence(st2[st2.length - 1]) && c !== "^"))
      ) {
        res += st2.pop();
      }
      st2.push(c);
    }
  }

  while (st2.length > 0) {
    res += st2.pop();
  }

  return res;
};

var precedence = function (op) {
  if (op === "^") return 3;
  else if (op === "*" || op === "/") return 2;
  else if (op === "+" || op === "-") return 1;
  else return -1;
};

// ------------------------Solution 2---------------------------------------
var optimal = function (s) {
  let stack = [];
  let operands = "abcdefghijklmnopqrstuvwxyz0123456789";
  let operators = "^*/+-";

  for (let i = s.length - 1; i >= 0; i--) {
    if (operands.includes(s[i])) {
      stack.push(s[i]);
    } else if (operators.includes(s[i])) {
      let op2 = stack.pop();
      let op1 = stack.pop();

      stack.push(`${op2}${op1}${s[i]}`);
    }
  }

  return stack[stack.length - 1];
};

let expression1 = "^a*bc";
let expression2 = "^a*bc";

let res1 = bruteForce(expression1);
let res2 = optimal(expression2);

console.log(res1);
console.log(res2);
