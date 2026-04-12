class Stack {
  constructor(){
    this.queue = [];
    this.tempQueue = [];
  };

  push(x){
    this.queue.push(x);

    while(this.tempQueue.length !== 0){
      this.queue.push(this.tempQueue.shift());
    }

    this.tempQueue = [...this.queue];
    this.queue = [];
  };

  pop(){
    return this.tempQueue.shift();
  };

  top(){
    return this.tempQueue[0];
  };

  isEmpty(){
    return this.tempQueue.length === 0;
  }
};

function main() {
  let stack = new Stack();
  stack.push(2);
  stack.push(3);

  console.log(stack.top());
  console.log(stack.pop());

  console.log(stack.top());
  console.log(stack.pop());

  console.log(stack.isEmpty());
}

main();
