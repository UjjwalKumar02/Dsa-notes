# Notes:

#### 1. Two sum

- Map + Prefix sum algorithm

```js
function solution(nums, k) {
  let mpp = new Map();
  // num, index

  for (let i = 0; i < nums.length; i++) {
    let target = k - nums[i];

    if (mpp.has(target)) {
      return [mpp.get(target), i];
    }

    mpp.set(nums[i], i);
  }
}
```

#### 2. Hashmap + Prefix sum algorithm

- Map <key, value>
- one loop
- any target
- if found ==> then result
- map.set()

#### 3. Sort colors

- [Brute sol]: Count the occurrence of elements and place the elements

- Array elements change ==> [arr[i], arr[j]] = [arr[j], arr[i]]
- Three pointers solution
- Mid goes from 0 to end
- Left and right for swaps
- why not mid++ in right ==> Need to check new element

```js
function solution(nums) {
  let left = 0;
  let mid = 0;
  let right = nums.length - 1;

  while (mid < right) {
    if (nums[mid] === 0) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      mid++;
      left++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[right]] = [nums[right], nums[mid]];
      right--;
    }
  }
}
```

#### 4. Max subarray sum (Kaydane algorithm)

- One variable Sum
- One loop
- Sum ++
- If sum === -ve ==> then reset
- At every step, we decide if start from fresh or continue
- ex: currSum = -5, next = 10 ==> start fresh because sum decreases

```js
function solution(nums) {
  if (nums.length === 0) return 0;
  let maxSum = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }

    sum += nums[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
```

```js
function alternate(nums) {
  let prefix = nums[0];
  let maxi = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefix = Math.max(nums[i], prefix + nums[i]);

    maxi = Math.max(maxi, prefix);
  }

  return maxi;
}
```

#### 5. Subarray start and end variables

- Slice ==> give new array/string excluding end

```js
function solution(nums) {
  if (nums.length === 0) return 0;
  let maxSum = nums[0];
  let sum = 0;

  let start = 0;
  let tempStart = 0;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
      tempStart = i; // resets
    }

    sum += nums[i];

    if (sum > maxSum) {
      maxSum = sum;
      start = tempStart;
      end = i;
    }
  }
  console.log(nums.slice(start, end + 1));
  return maxSum;
}
```

#### 6. Rearrange elements with signs

- two variables : pos, neg ==> indexes
- Increment by two
- res[pos] = num ==> if pos (Assignment)

#### Array sorting

```js
arr.sort((a, b) => a - b); // small - large , ASC
arr.sort((a, b) => b - a); // large - small , DESC
```

#### 7. Backtracking

- Try a choice => explore => undo the choice => try next option.

#### 8. Next permutation

- New array ==> [...arr]
- Sorting a array of arrays

```js
var generateAll = function (nums) {
  let res = [];
  let visited = new Array(nums.length).fill(false);
  backtrack(0, [], res, nums, visited);
  return res;
};

var backtrack = function (idx, curr, res, nums, visited) {
  if (curr.length === nums.length) {
    res.push([...curr]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    curr.push(nums[i]);

    backtrack(i + 1, curr, res, nums, visited);

    curr.pop();
    visited[i] = false;
  }
};

var sol = function (nums) {
  let all = generateAll(nums);

  all.sort((a, b) => {
    for (let i = 0; i < nums.length; i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }

    return 0;
  });

  let idx = -1;

  for (let k = 0; k < all.length; k++) {
    let equal = true;

    for (let i = 0; i < nums.length; i++) {
      if (all[k][i] !== nums[i]) {
        equal = false;
        break;
      }
    }

    if (equal) {
      idx = k;
      break;
    }
  }

  if (idx === -1) return;

  idx = (idx + 1) % all.length;

  let temp = all[idx];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = temp[i];
  }
};
```

#### 9. Next permutation (Optimal)

- Find the last of decreasing order of number from end
- Swap that point with the bigger number but earliest from end
- Reverse the part right to the point (index+1 => n-1)
- For reversing, use stack

```js
function nextPermutation(nums) {
  let index = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      index = i - 1;
      break;
    }
  }

  if (index !== -1) {
    let gIndex = -1;
    for (let i = nums.length - 1; i > 0; i--) {
      if (nums[i] > nums[index]) {
        gIndex = i;
        break;
      }
    }

    [nums[index], nums[gIndex]] = [nums[gIndex], nums[index]];
  }

  let stack = [];
  for (let i = index + 1; i < nums.length; i++) {
    stack.push(nums[i]);
  }
  for (let i = index + 1; i < nums.length; i++) {
    nums[i] = stack.pop();
  }
}
```

#### 10. Pattern

```js
let some = true;

for("loop"){
  if("condition"){
    some = false;
    break;
  }
}
```

#### 11. Leaders in array

- Maximum from right
- Traverse from right
- push only maximum elements
- update maximum variable

- Monotonic stack solution

```js
function leadersInArray(nums) {
  let stack = [];
  let right = new Array(nums.length).fill(-1);

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }

    right[i] = stack.length > 0 ? -1 : nums[i];

    stack.push(nums[i]);
  }

  let res = [];

  for (let num of right) {
    if (num !== -1) res.push(num);
  }

  return res;
}
```

#### 12. Longest consecutive sequence

- Find the starting point
- Use set (Hash set algorithm)
- Loop in set (TL)
- Curr ++, len ++
- Solve

```js
var hashSet = function (nums) {
  let st = new Set(nums);
  let maxi = 0;

  for (let num of st) {
    if (!st.has(num - 1)) {
      let curr = num;
      let len = 0;

      while (st.has(curr)) {
        len++;
        curr++;
      }

      maxi = Math.max(maxi, len);
    }
  }

  return maxi;
};
```

#### 13. Set matrix zero

#### 14. Transpose of a Matrix

- i = 0 to n
- j = i+1 to n
- [i][j] <==> [j][i]

#### 15. Rotate matrix by 90 degree

#### 16. Spiral of a matrix

- Four pointers

#### 17. No. of subarrays with sum k (negatives allowed)

- Map + prefix sum algorithm
- If prefix sum equal to sum - k is seen before,
- then I found a subarray ending here with sum k.
- map<prefix sum, freq>

```js
function solution(arr, k) {
  let mpp = new Map();
  // prefix sum, freq

  mpp.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let num of arr) {
    sum += num;

    let target = sum - k;

    if (mpp.has(target)) {
      count += mpp.get(target);
    }

    mpp.set(sum, (mpp.get(sum) || 0) + 1);
  }

  return count;
}
```

#### 18. Contiguous array

- solve it
- prefix +1 -1
- If prefix is seen before then subtract its length
- map + prefix sum
- map<prefix, earliest index>
- map(0, -1) for length => i+1

```js
var solution = function (nums) {
  let mpp = new Map();
  // prefix, idx

  mpp.set(0, -1);
  // for len i+1

  let res = 0;
  let prefix = 0;

  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i] === 1 ? 1 : -1;

    if (mpp.has(prefix)) {
      let len = i - mpp.get(prefix);
      res = Math.max(res, len);
    } else {
      mpp.set(prefix, i);
    }
  }

  return res;
};
```
