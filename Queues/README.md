# Notes

#### 1. Queue

- Push to end
- Pop from start

#### 2. Circular Queue

- start, end
- push => end ++ (circular)
- pop => start++ (circular)
- edge cases

#### 3. Queue using two stacks

- stack, tempStack
- push => stack.push
- pop => if(tempstack is empty), then (stack => tempstack), and use tempstack
- peek => same as pop
- o(1)