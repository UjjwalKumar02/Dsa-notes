var solution = function (stack) {
  if (stack.length > 0) {
    let curr = stack.pop();
    solution(stack);
    insert(curr, stack);
  }
};

var insert = function (curr, stack) {
  if (stack.length === 0 || stack[stack.length - 1] <= curr) {
    stack.push(curr);
    return;
  }

  let temp = stack.pop();
  insert(curr, stack);

  stack.push(temp);
};

let st = [1, 9, 0, 4, 3];

solution(st);

console.log(st);
