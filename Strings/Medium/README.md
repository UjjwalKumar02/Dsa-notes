## Notes:

#### 1. Sort Chars by freq :

- Why didnt use a set => [will miss duplicates]
- Sorting of a Map :

```js
let newMap = new Map([...mpp].sort((a, b) => a[1] - b[1]));
```

#### 2. Maximum nested depth of valid parentheses :

- Depth variable

#### 3. Roman to Int :

- Map<roman symbol, int>
- Iterate from end
- Just add the symbol's int
- If current element (mapped) is smaller than sum => then subtract

#### 4. String to Int ATOI :

- Sign handling

#### 5. Count no. of substring having k distinct chars :

- AtMostK(k) - AtMostK(k-1)
- AtMostK here is a silding window
- Count += r-l+1
- use map not set for tracking frequency
- because while deleting l from set, removes the unique element

#### 6. Longest palindrome string :

- Expand func
- Expand till it fails
- Odd and even expand => max
- Also update start of res
- start = i - (length/2)

```js
var optimal = function (s) {
  const expand = (l, r) => {
    while (l >= 0 && r < s.length) {
      if (s[l] !== s[r]) break;
      l--;
      r++;
    }

    return r - l - 1;
  };

  let maxi = 0;
  let start = 0;

  maxi = Math.max(maxi, expand(0, 0));

  for (let i = 1; i < s.length; i++) {
    let odd = expand(i, i);
    let even = expand(i - 1, i);

    let len = Math.max(odd, even);

    if (len > maxi) {
      maxi = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + maxi);
};
```

#### 7. Sum of beauty of substring :

- Loop thru the string for starting point
- Make a freq array
- Loop thru every substring
- Update the freq array
- For every substring, Calculate beauty
- Only consider elements whose freq > 0, otherwise min is always zero

```js
function beautySum(s) {
  let n = s.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let freq = new Array(26).fill(0);

    for (let j = i; j < n; j++) {
      let idx = s[j].charCodeAt(0) - "a".charCodeAt(0);
      freq[idx]++;

      let maxi = 0;
      let mini = Infinity;

      for (let k = 0; k < 26; k++) {
        if (freq[k] > 0) {
          maxi = Math.max(maxi, freq[k]);
          mini = Math.min(mini, freq[k]);
        }
      }

      sum += maxi - mini;
    }
  }

  return sum;
}
```
