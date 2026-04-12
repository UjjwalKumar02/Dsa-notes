class Queue {
  constructor() {
    this.queue = new Array(100);
    this.start = -1;
    this.end = -1;
    this.currSize = 0;
    this.maxSize = 100;
  }

  push(x) {
    if (this.currSize === this.maxSize) {
      console.log("Queue overflow");
      return;
    }

    if (this.isEmpty()) {
      this.start = 0;
      this.end = 0;
    } else {
      this.end = (this.end + 1) % this.maxSize;
    }

    this.queue[this.end] = x;
    this.currSize++;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }

    let topElement = this.queue[this.start];

    if (this.currSize === 1) {
      this.start = -1;
      this.end = -1;
    } else {
      this.start = (this.start + 1) % this.maxSize;
    }
    this.currSize--;

    return topElement;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }

    return this.queue[this.start];
  }

  isEmpty() {
    return this.currSize === 0;
  }
}

//-------------------------------------Solution----------------------------------------
class QueueStack {
  constructor() {
    this.queue = new Queue();
  }

  push(x) {
    this.queue.push(x);

    let len = this.queue.currSize;
    for (let i = 0; i < len - 1; i++) {
      this.queue.push(this.queue.pop());
    }
  }

  pop() {
    let topElement = this.queue.peek();

    this.queue.pop();

    return topElement;
  }

  top() {
    return this.queue.peek();
  }

  isEmpty() {
    return this.queue.isEmpty();
  }
}

function main() {
  let stack = new QueueStack();
  stack.push(2);
  stack.push(3);

  console.log(stack.top());
  console.log(stack.pop());

  console.log(stack.top());
  console.log(stack.pop());

  console.log(stack.isEmpty());
}

main();
