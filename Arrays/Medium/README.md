# Notes

#### 1. Two sum

- Map
- Prefix sum algorithm

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
- else map.set()

#### 3. Sort colors

- Count the occurrence of elements
- Array elements change ==> [arr[i], arr[j]] = [arr[j], arr[i]]
- Three pointers soln
- Mid goes to the end
- Left and right for swaps
- why not mid++ ==> Need to check new element

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

#### 4. Max subarray sum (optimal)

- Kaydane algorithm
- One variable Sum
- One loop
- Sum ++
- If sum === -ve ==> then reset

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

#### 5. Note

- Length ==> map + prefix sum
- sum => kaydane
- window ==> sliding window

#### 6. Subarray start and end variables

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
      tempStart = i;
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

#### 7. Rearrange elements with signs

- two variables : pos, neg ==> indexes
- Increment by two
- res[pos] = num ==> if pos (Assignment)

#### 8. Backtracking

- Try a choice => explore => undo the choice => try next option.

#### 8. Next permutation

- New array ==> [...arr]
- Sorting a array of arrays

```js
function backtrack(index, nums, res) {
  if (index === nums.length) {
    res.push([...nums]);
    return;
  }
  for (let i = index; i < nums.length; i++) {
    [nums[index], nums[i]] = [nums[i], nums[index]];
    backtrack(index + 1, nums, res);
    [nums[index], nums[i]] = [nums[i], nums[index]];
  }
}

function permute(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  backtrack(0, nums, res);
  return res;
}

function solution(nums) {
  let all = permute([...nums]);

  // Sort array of arrays
  all.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
  });

  // Find equal nums
  let index = -1;
  for (let i = 0; i < all.length; i++) {
    let equal = true;
    for (let j = 0; j < nums.length; j++) {
      if (all[i][j] !== nums[j]) {
        equal = false;
        break;
      }
    }
    if (equal) {
      index = i;
      break;
    }
  }

  if (index === -1) return;

  index = (index + 1) % all.length;
  let res = [...all[index]];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
}
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
for(){
  if(){
    some = false;
  }
}
```

#### 11. Leaders in array

- Maximum from right
- Traverse from right
- push only maximum elements
- update maximum variable

#### 12. Longest consecutive sequence

- Find the starting point
- Use set (Hash set algorithm)
- Loop for set (TL)
- Curr ++, len ++

#### 13. Set matrix zero

#### 14. Transpose of a Matrix

- i = 0 to n
- j = i+1 to n
- [i][j] <==> [j][i]

#### 15. Rotate matrix by 90 degree

#### 16. Spiral of a matrix

- Four pointers

#### 17. No. of subarrays with sum k

- Map + prefix sum algorithm
