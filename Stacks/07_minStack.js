class MinStack {
  constructor() {
    this.st = [];
    this.tempSt = [];
  }

  push(val) {
    this.st.push(val);

    if (this.tempSt.length === 0) {
      this.tempSt.push(val);
    } else {
      let mini = Math.min(val, this.tempSt[this.tempSt.length - 1]);
      this.tempSt.push(mini);
    }
  }

  pop() {
    this.st.pop();
    this.tempSt.pop();
  }

  top() {
    return this.st[this.st.length - 1];
  }

  getMin() {
    return this.tempSt[this.tempSt.length - 1];
  }
}

function main() {
  let miniSt = new MinStack();
  miniSt.push(2);
  miniSt.push(5);
  miniSt.push(1);
  console.log(miniSt.getMin());

  miniSt.pop();
  console.log(miniSt.getMin());
}

main();
