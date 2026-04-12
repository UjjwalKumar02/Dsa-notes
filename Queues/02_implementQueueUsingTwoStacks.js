class StackQueue {
  constructor() {
    this.stack = [];
    this.tempStack = [];
  }

  push(x) {
    this.stack.push(x);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    if (this.tempStack.length === 0) {
      while (this.stack.length > 0) {
        this.tempStack.push(this.stack.pop());
      }
    }

    return this.tempStack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    if (this.tempStack.length === 0) {
      while (this.stack.length > 0) {
        this.tempStack.push(this.stack.pop());
      }
    }

    return this.tempStack[this.tempStack.length - 1];
  }

  isEmpty() {
    return this.tempStack.length === 0 && this.stack.length === 0;
  }
}

function main() {
  let queue = new StackQueue();

  queue.push(5);
  queue.push(10);

  console.log(queue.peek());

  console.log(queue.pop());

  console.log(queue.peek());

  console.log(queue.isEmpty());
  console.log(queue.pop());
  console.log(queue.isEmpty());
}

main();
