# Notes

#### 1. ATOI

- For next iteration, we use recursion
- Started variable
- Sign variable
- Skip starting whitespaces
- Stop when encounter non-digit

#### 2. Power

- Like factorial
- x \* myPow(x, n-1)
- base conditions [where to stop]
- helper function
- negative power handling, [x, n] = [1/x, -n]

#### 3. Count Good numbers

- [Brute sol]:
  - use recursion for iterating over the numbers
  - multiply the choices
  - BigInt by using `n`
  - execute for current itr
  - call for next itr
  - return for current itr
  - base condition

- [Optimal]:
  - count even indexes and odd indexes
  - even = ceil(n/2), odd = floor(n/2)
  - choices ^ indexCnt
  - Power = 13 = 12 + 1

#### 4. Sort a stack using recursion

- Pop all elements
- then starts to insert
- if empty or prev smaller, then push and return
- else pop, push curr, and then push temp

#### 5. Reverse a stack

- Pop all elements, then start to insert
- If empty then insert
- else pop the top = temp
- insert the curr
- push the temp
