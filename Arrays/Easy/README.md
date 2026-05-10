# Notes:

#### 1. Track Previous value

```js
let curr = null;
let prev = null;

for (let num of nums) {
  prev = curr;
  curr = num;
}
```

#### 2. Assigning a value to the length of array, will delete the elements after that.

```js
arr.length = 5;
```

#### 3. Rotating array to left

- Number of rotations should be the remainder after dividing the array length
- Store the vulnerable value to temp
- Rotate by loop
- assign the missing one

```js
let arr = [1, 2, 3, 4];
// 2, 3, 4, 1

let temp = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = temp;
```

#### 4. Use set for unique values & Maps for frequncies and key-value pairs.

```js
let st = new Set([1, 2, 4]);
let mpp = new Map([
  ["key", value],
  ["key", value],
]);
```

#### 5. Merge Sort Algorithm

```js
function recursiveDFS() {
  // Base condition
  // call for left
  // call for right
  // Execute for current left and right
  // return result
}
```

```js
function mergeSort(arr) {
  let res = helper(0, arr.length - 1, arr);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = res[i];
  }
}

function helper(start, end, arr) {
  if (start === end) return [arr[start]];

  let mid = start + Math.floor((end - start) / 2);
  let left = helper(start, mid, arr);
  let right = helper(mid + 1, end, arr);

  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }

  while (i < left.length) {
    res.push(left[i++]);
  }
  while (j < right.length) {
    res.push(right[j++]);
  }

  return res;
}
```

#### 6. Sliding window

```js
let l = 0;

for (let r = 0; r < n; r++) {
  while ("when window fails") {
    l++;
  }
}
```

#### 7. Is Sorted and Rotated

- Count variable for abnormalities
- % length : (circular)

```js
function solution(arr) {
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) {
      cnt++;
    }
  }

  return cnt <= 1;
}
```

#### 8. Max consecutive ones

- Sliding window
- Resets the window if required `l = r + 1`
- Length : [r-l+1]

```js
function solution(nums) {
  let l = 0;
  let res = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== 1) {
      l = r + 1;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
}
```

#### 9. XOR (Bitwise)

- same ^ same = 0
- diff ^ diff = 1

- 2 ^ 2 = 0
- 0 ^ 0 = 0

- 2 ^ 3 = 1
- 10 ^ 11 = 01

- Returns the single number

#### 10. Longest subarrary with sum k

- Sliding window
- while condition, Left++ and sum--

```js
function solution(nums, k) {
  let l = 0;
  let sum = 0;
  let maxLen = 0;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];

    while (sum > k) {
      sum -= nums[l];
      l++;
    }

    if (sum === k) {
      maxLen = Math.max(maxLen, r - l + 1);
    }
  }
  return maxLen;
}
```

#### 11. Longest subarray with sum k (with negatives)

- mpp[0] = -1 ==> if target = 0, then len = i+1
- target = sum - k ==> sum - target = k
- len = sum(i) - target(i)
- Save earliest i for longest len

- If I’ve seen a prefix sum equal to `sum - k` before,
- then I found a subarray ending here with sum k.

```js
function solution(nums, k) {
  let maxLen = 0;

  let mpp = new Map();
  // sum, earliest index

  mpp.set(0, -1);

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    let target = sum - k;

    if (mpp.has(target)) {
      let len = i - mpp.get(target);
      maxLen = Math.max(maxLen, len);
    }

    if (!mpp.has(sum)) {
      mpp.set(sum, i);
    }
  }
  return maxLen;
}
```

#### 12. Palindrome Number

- Digits = number % 10 and number = number/10
- Reverse = Reverse \* 10 + digit

```js
function solution(x) {
  if (x < 0) return false;
  if (x % 10 === 0 && x !== 0) return false;

  let rev = 0;

  while (x > rev) {
    let digit = x % 10;
    rev = rev * 10 + digit;
    x = Math.floor(x / 10);
  }

  return x === rev || x === Math.floor(rev / 10);
}
```

#### 13. Boyer Moore Voting Algorithm

- candidate
- cnt
- if cnt === 0, candidate = num
- cnt += (num === candidate) ? 1 : -1;
- return cnt > nums.length/2 ? candidate : null

#### 14. Number reverse and Check Prime

```js
let rev = 0;

while (num > 0) {
  let digit = num % 10;
  rev = rev * 10 + digit;
  num = Math.floor(num / 10);
}
```

```js
var checkPrime = function (num) {
  if (num <= 1) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let limit = Math.sqrt(num);

  for (let i = 5; i <= limit; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};
```

## Patterns

- Length => sliding window
- sliding window =>
  - Window resets
  - window fails then slides
  - window is true and make it false
- Count of subarrays => AtMostK
- Negative elements for sum => Prefix + Map
- Maximum sum of subarray => Kaydane algorithm
- Window => sliding window
