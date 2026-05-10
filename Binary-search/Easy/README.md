# Notes:

#### 1. Binary search

- Sorted array (ASC)
- Left, right
- mid
- equal, greater, lower

#### 2. Lower bound

- Smallest index
- res >= num
- if equal and greater ==> store and move left

#### 3. Upper bound

- Smallest index
- res > num
- if equal and lower ==> move right
- else store and move left

#### Pattern:

- Length
- Stops when low = high
- high = mid, [to check mid]

```js
let low = 0;
let high = arr.length; // if arr[r] not checked or necessary

while (low < high) {
  let mid = Math.floor((low + high) / 2);

  if ("condition") {
    low = mid + 1;
  } else {
    high = mid;
  }
}

return low;
```

#### 4. Search Insert Position

- Solve it

#### 5. Floor and ceil

- Floor: res <= num , largest index
- Math.floor() → rounds a number `down` to the nearest whole number.

- Ceil: res >= num, smallest index
- Math.ceil() → rounds a number `up` to the nearest whole number.

#### 6. First and last occurence

- Solve it

#### 7. Count occurences

- last occurence - first occurence + 1

#### 8. Search in rotated and sorted array

- mid
- check mid
- if left sorted
  - if present in left
  - if in right

- if right sorted
  - if present in right
  - if in left

#### 9. Search in rotated sorted array with dupliactes

- same
- if nums[l] == nums[mid] == nums[r]
- l++, r--
- skip duplicates

#### 10. Find Minimum in rotated sorted array

- Min is always in the unsorted one.
- we always check [mid] with [high]
- if [mid] > [high]
- becoz min might be at 0
- stops when l == r
- r = mid ==> check mid also

```js
function sol(nums) {
  let n = nums.length;

  let low = 0;
  let high = n - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] > nums[high]) {
      low = mid - 1;
    } else {
      high = mid;
    }
  }

  return nums[low];
}
```

#### 11. Find how many times rotated

- Find min element index = ans

#### 12. Single number

- Pick Mid so that it will always be a even index
- Single number lies where the indexes broken
- low < high (pattern)

#### 13. Pattern:

- This pattern is binary search on a monotonic condition.
- used to find the first position where something becomes true.
- Whenever you think: “Answer lies in a region, not a value”

```js
while (l < r)
  if (condition) l = mid + 1;
  else r = mid;
return l;
```

#### 14. Find peak element

- midval, leftval, rightval
- if leftVal > midVal, then it is on left
- else on right
