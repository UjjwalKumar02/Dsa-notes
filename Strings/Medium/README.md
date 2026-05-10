### Important points to remember:

#### 1. Sort Chars by freq :

- How to sort a map

```js
let newMap = new Map([...mpp].sort((a, b) => a[1] - b[1]));
```

#### 2. Maximum nested depth of valid parentheses :

- Depth variable

#### 3. Roman to Int :\*\*

- Iterate from end
- if next element is smaller than sum => then subtract

#### 4. String to Int ATOI :\*\*

- Sign handling

#### 5. Count no. of substring having k distinct chars :\*\*

- AtMostK(k) - AtMostK(k-1)
- AtMostK here is a silding window
- Count += r-l+1
- use map not set for tracking frequency
- because while deleting l from set, removes the unique element

#### 6. Longest palindrome string :\*\*

- Expand func
- Expand till it found true
- Odd and even expand => max
- Also update start of resStr variable

#### 7. Sum of beauty of substring :\*\*

- A freq array
- Calculate beauty
