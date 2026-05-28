var solution = function (stack) {
  if (stack.length === 0) return;

  let val = stack.pop();
  solution(stack);

  insert(val, stack);
};

var insert = function (curr, stack) {
  if (stack.length === 0) {
    stack.push(curr);
    return;
  }

  let temp = stack.pop();
  insert(curr, stack);

  stack.push(temp);
};

let st = [1, 2, 3, 4];
solution(st);

console.log(st);
