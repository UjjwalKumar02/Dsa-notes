# Notes

#### 1. Sliding window maximum

- Deque
- Store index in decreasing order(nums)
- If more than k elements, then pop from start
- Pops all smaller recent elements
- push the current
- Result

#### 2. Stock span problem

- Monotonic stack
- amortized O(1)
- stores [price, span]
- span = 1
- span += previous lower prices[span]

#### 3. Celebrity Problem

- Select candidate:
- let candidate = 1
- if [candidate][i] === 1
- ie, if candidate knows someone
- Verify candidate for celebrity

#### 4. LRU Cache

- Double linked list
- node (key, val, prev, next)
- key = val
- map <key, node>
- addNode ==> adds next to head
- deleteNode ==> delete from last
- get()
- put()

#### 5. LFU Cache

- Two maps: KeyNode, FreqListMap
- Update freqListMap
- get, set
