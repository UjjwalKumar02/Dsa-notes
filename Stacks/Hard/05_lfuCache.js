class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
    this.cnt = 1;
  }
}

class List {
  constructor() {
    this.size = 0;
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addFront(node) {
    let temp = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    temp.prev = node;
    node.next = temp;
    this.size++;
  }

  deleteNode(node) {
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.size--;
  }
}

class LFUCache {
  constructor(capacity) {
    this.maxSize = capacity;
    this.minFreq = 0;
    this.currSize = 0;
    this.keyNodeMap = new Map();
    this.freqListMap = new Map();
  }

  updateFreqListMap(node) {
    this.keyNodeMap.delete(node.key);

    this.freqListMap.get(node.cnt).deleteNode(node);

    if (
      node.cnt === this.minFreq &&
      this.freqListMap.get(node.cnt).size === 0
    ) {
      this.minFreq++;
    }

    let nextFreqListMap = new List();

    if (this.freqListMap.has(node.cnt + 1)) {
      nextFreqListMap = this.freqListMap.get(node.cnt + 1);
    }

    node.cnt += 1;

    nextFreqListMap.addFront(node);

    this.freqListMap.set(node.cnt, nextFreqListMap);
    this.keyNodeMap.set(node.key, node);
  }

  get(key) {
    if (this.keyNodeMap.has(key)) {
      let resNode = this.keyNodeMap.get(key);
      let res = resNode.val;

      this.updateFreqListMap(resNode);
      return res;
    }

    return -1;
  }

  put(key, val) {
    if (this.maxSize === 0) return;

    if (this.keyNodeMap.has(key)) {
      let resNode = this.keyNodeMap.get(key);
      resNode.val = val;
      this.updateFreqListMap(resNode);
    } else {
      if (this.currSize === this.maxSize) {
        let list = this.freqListMap.get(this.minFreq);
        this.keyNodeMap.delete(list.tail.prev.key);
        this.freqListMap.get(this.minFreq).deleteNode(list.tail.prev);
        this.currSize--;
      }

      this.currSize++;
      this.minFreq = 1;

      let newList = new List();

      if (this.freqListMap.has(this.minFreq)) {
        newList = this.freqListMap.get(this.minFreq);
      }

      let newNode = new Node(key, val);
      newList.addFront(newNode);
      this.keyNodeMap.set(key, newNode);
      this.freqListMap.set(this.minFreq, newList);
    }
  }
}

// LFU Cache
const cache = new LFUCache(2);

// Queries
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1) + " ");
cache.put(3, 3);
console.log(cache.get(2) + " ");
console.log(cache.get(3) + " ");
cache.put(4, 4);
console.log(cache.get(1) + " ");
console.log(cache.get(3) + " ");
console.log(cache.get(4) + " ");
