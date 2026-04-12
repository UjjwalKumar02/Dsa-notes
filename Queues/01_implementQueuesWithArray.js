class ArrayQueue {
  constructor() {
    this.queue = new Array(100);
    this.start = -1;
    this.end = -1;
    this.currSize = 0;
    this.maxSize = 100;
  }

  push(x) {
    if (this.currSize === this.maxSize) {
      throw new Error("Queue overflow: element limit exceeds!");
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
      throw new Error("Queue is empty");
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
      throw new Error("Queue is empty");
    }
    return this.queue[this.start];
  }

  isEmpty() {
    return this.currSize === 0;
  }
}

function main() {
  let queue = new ArrayQueue();

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
