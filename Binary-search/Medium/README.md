# Notes:

#### 1. Find Sqrt of number

- [Brute force]: Loop thru 1 to n, and check i\*i <= n
- [Binary search]: mid \* mid <= number

#### 2. Find Nth root of number "M"

- [Brute force]: Loop thru 1 to n, and `check pow(i, n) === m`
- Binary search

#### Pattern:

- What to find
- Range
- Binary search (sorted)
- check can function
- can function definition

#### 3. Koko eating bananas

- min k = no. of bananas per hour
- Range: 1 to max(piles)
- Binary search
- Time calculation:
- Ceil: `cnt += Math.floor((num + k - 1) / k)`

#### 4. Minimum days to make M bouquets

- Adjacent flowers
- Range 1 to max(bloomDay)
- Binary search
- can function

```js
function can(bloomDay, m, k, mid) {
  let bouquets = 0;
  let flowers = 0;

  for (let num of bloomDay) {
    if (num <= mid) {
      flowers++;

      if (flowers === k) {
        bouquets++;
        flowets = 0;
      }
    } else {
      flowers = 0;
    }
  }
}
```

#### 5. Find Smallest Divisor

- Range 1 to max
- Divide and sum
- If possible, look for smaller ones
- Ceil: `Math.floor((num + k - 1) / k)` [num/k => ceil]

```js
var isPossible = function (nums, mid, threshold) {
  let sum = 0;
  for (let num of nums) {
    sum += Math.floor((num + mid - 1) / mid);
  }

  return sum <= threshold;
};
```

#### 6. Least capacity to ship packages in D days

- Min capacity
- Range => Max to Sum
- Calculation of days
- can function

```js
function can(weights, days, currCapacity) {
  let totalDays = 1;
  let currLoad = 0;

  for (let num of weights) {
    if (currLoad + num <= currCapacity) {
      currLoad += num;
    } else {
      totalDays++;
      currLoad = num;
    }
  }

  return totalDays <= days;
}
```

#### 7. Kth Missing Positive Number

- Loop thru and maintain a prev value
- Gap = arr[i] - prev - 1;
- decrease k -= gap
- If gap >= k
- then ans = prev + k

- [Binary search] :
- Find smallest index where [missingNum >= current]
- stops at l = r
- ans = l + k

#### 8. Aggressive cows

- Maximum (min distance)
- sort (to find max diff)
- Range: 0 to maxi-mini
- can => is it possible to store atleast K cows

#### 9. Book Allocation problem

- Minimize the maximum pages
- max page range => [maxi, sum]
- can => if we assign max pages to all , it should be lower than m

```js
function can(nums, k, maxPages) {
  let cnt = 1;
  let sum = 0;

  for (let num of nums) {
    if (sum + num > maxPages) {
      cnt++;
      sum = 0;
    }

    sum += num;
  }

  return cnt <= m;
}
```

#### 10. Split array largest sum

- Minimum (largest sum)
- Range: maxi to sum all
- can func
- if we give max sum to all, the count <= k
- it is max sum allowed, not should be equal to max sum always

#### 11. Painters partition

- Min time
- Minimum (largest sum)
- Range: maxi to sum

#### Pattern:

- If largest assigned everyone, then count <= given

#### 12. PATTERN: Binary Search + Greedy

- Minimize maximum OR maximize minimum

- Define search space:
  l = min possible answer
  r = max possible answer

```js
 While l <= r:
   mid = (l + r) / 2

   if can(mid):
       update answer
       move (left/right depending on problem)
   else:
       move opposite
```

- CAN FUNCTION:
  - Greedy
  - Linear scan
  - Returns true/false

#### 13. Minimize Max distance to gas stations

- Place stations in between the stations
- Minimize the max gap
- range of max gap => 0 to max gap adjacent
- r - l > 1e-6
- r = mid, l = mid
- can =>
- count => no. of needed to fill btw
- true if count <= k
- we can achieve maxDistance gap with count stations,
- it means we can do more => minimize the gap

#### 14. Median of two sorted array

- operate on small len array [TC]
- partitions on both array
- leftMax = [partition - 1]
- rightMax = [partition]
- if left <= right, then answer
- if left > right, then we moved too far, go back

#### 15. Kth element of two sorted array

- cntSmall + cntLarge = k
