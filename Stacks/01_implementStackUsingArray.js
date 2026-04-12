class ArrayStack {
  constructor() {
    this.stack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    let topElement = this.stack[this.stack.length - 1];
    this.stack.pop();
    return topElement;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

function main() {
  let stack = new ArrayStack();
  stack.push(2);
  stack.push(3);

  console.log(stack.top());
  console.log(stack.pop());

  console.log(stack.top());
  console.log(stack.pop());

  console.log(stack.isEmpty());
}

main();
