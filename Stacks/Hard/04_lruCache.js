class LRUCache {
  constructor(capacity) {
    this.Node = function (_key, _val) {
      return {
        key: _key,
        val: _val,
        prev: null,
        next: null,
      };
    };

    this.head = this.Node(-1, -1);
    this.tail = this.Node(-1, -1);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.m = new Map();
    this.cap = capacity;
  }

  addNode(newNode) {
    // head-> <-new-> <-next
    let temp = this.head.next;
    this.head.next = newNode;
    newNode.prev = this.head;
    newNode.next = temp;
    temp.prev = newNode;
  }

  deleteNode(delNode) {
    // prevNode-> <-node-> <-next
    let prevNode = delNode.prev;
    let nextNode = delNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  get(key_) {
    if (this.m.has(key_)) {
      let resNode = this.m.get(key_);
      let res = resNode.val;

      this.m.delete(key_);

      this.deleteNode(resNode);

      this.addNode(resNode);
      this.m.set(key_, this.head.next);

      return res;
    }

    return -1;
  }

  put(key_, value_) {
    if (this.m.has(key_)) {
      let resNode = this.m.get(key_);

      this.m.delete(key_);
      this.deleteNode(resNode);
    }

    if (this.m.set === this.cap) {
      this.m.delete(this.tail.prev.key);
      this.deleteNode(this.tail.prev);
    }

    let newNode = new this.Node(key_, value_);
    this.addNode(newNode);
    this.m.set(key_, this.head.next);
  }
}

// Driver code
let cache = new LRUCache(2);

// Put values in cache
cache.put(1, 1);
cache.put(2, 2);

// Get value for key 1
console.log(cache.get(1));

// Insert another key (evicts key 2)
cache.put(3, 3);

// Key 2 should be evicted
console.log(cache.get(2));

// Insert another key (evicts key 1)
cache.put(4, 4);

// Key 1 should be evicted
console.log(cache.get(1));

// Key 3 should be present
console.log(cache.get(3));

// Key 4 should be present
console.log(cache.get(4));
