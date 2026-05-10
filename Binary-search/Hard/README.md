# Notes:

#### 1. Find row with max 1's

- Loop
- count = m - lowerBound(arr)
- lowerBound : num <= 1
- Max count Pattern

```
if(cnt > maxCnt){
  update
}
```

#### 2. Search in 2D Array

- Loop
- Take the row where target lies in the range
- Binary serach on that row

#### 3. Search in 2D Array

- Binary Search with [row][col]
- Row starts at 0
- Col starts at last
- if curr > target, then col--
- if small, then row++
- while(row < n && col >= 0)

#### 4. Find Peak element in 2D array

- Binary search for column
- Take row with max value on that column

#### 5. Matrix median

- [Brute]: Make one array, sort, find median
- [optimal]:
- Range of median => [Min, max]
- Binary search
- Find num of smaller elements = upperbound on (target = mid)
- Now we do upperbound to find median
- If count <= Math.floor((n \* m)/2), then go right
- else go left (high = mid)
