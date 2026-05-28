# Notes:

#### 1. Generate all binary strings with no consecutive ones

- `(idx, curr, res)`
- Recursive add to the current string
- Choices = 0 | 1
- If its a starting point or previous is not One, then only can place 1;

#### 2. Generate all valid parentheses

- Two choices to add = "(" | ")"
- Is valid parentheses function

- Optimal => Open and Close variable
- If open < n, then add
- If close < open, then add

#### 3. Power set

- Starting point in a loop inside recursion
- It starts from the index
- Backtrack
- Push in everycase

```js
var powerSet = function (str) {
  let res = [];
  recursion(0, [], res, str);
  return res;
};

var recursion = function (idx, curr, res, str) {
  res.push([...curr]);

  for (let i = idx; i < str.length; i++) {
    curr.push(str[i]);
    recursion(i + 1, curr, res, str);
    curr.pop();
  }
};
```

#### 4. Number of subsequences with sum k

- In recursion, we have to decide to include or exclude the current

```js
var sol = function (nums, k) {
  return recursion(0, k, nums);
};

var recursion = function (idx, left, nums) {
  if (left === 0) {
    return 1;
  }

  if (left < 0 || idx >= nums.length) {
    return 0;
  }

  let count = 0;
  count += recursion(idx + 1, left - nums[idx], nums);
  count += recursion(idx + 1, left, nums);

  return count;
};
```

#### 5. Combination sum

- Include current element (Dont move the index, duplicates are allowed)
- Exclude current element

#### 6. Combination sum II

- To remove duplicates records in the res
- `First sort the input array`
- Use the starting loop method
- Skip the duplicates
- `if(i > idx && nums[i] === nums[i-1]) continue`
- It tries to stop starting from the same element

```js
var solution = function (candidates, target) {
  let res = [];
  let curr = [];

  candidates.sort((a, b) => a - b);
  recursion(0, target, curr, candidates, res);

  return res;
};

var recursion = function (idx, left, curr, arr, res) {
  if (left === 0) {
    res.push([...curr]);
    return;
  }

  if (left < 0 || idx >= arr.length) return;

  for (let i = idx; i < arr.length; i++) {
    if (i > idx && arr[i] === arr[i - 1]) continue;

    curr.push(arr[i]);
    recursion(i + 1, left - arr[i], curr, arr, res);
    curr.pop();
  }
};
```

#### 7. Subset sum

- Same as Power set
- But with currSum
- Sort the res

#### 8. Subsets II

- Power set with no duplicates

#### 9. Combination sum III

- Solve it

#### 10. Letter combination of phone numbers

- (idx, currString, res, map)
- Take the mapped string
- Loop over that string
- idx => represents the elements in the currString

```js
var solution = function (digits) {
  if (digits.length === 0) return [];

  const mpp = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  let res = [];
  helper(0, "", res, digits, mpp);
  return res;
};

var helper = function (idx, curr, res, digits, mpp) {
  if (curr.length === digits.length) {
    res.push(curr);
    return;
  }

  let str = mpp[digits[idx] - "0"];

  for (let char of str) {
    helper(idx + 1, curr + char, res, digits, mpp);
  }
};
```
