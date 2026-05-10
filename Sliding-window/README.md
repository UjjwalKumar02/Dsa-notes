# Notes

#### 1. Sliding window pattern

- Window exists
- If window fails => reset window
- If window fails => slides
- While window is true => update and Fails the window

#### 2. Update Length depending on situation

#### 3. Pattern

- Add
- Check if broken => If broken then slides
- Update len

#### 4. Maximum Frequency update in sliding window

- with map
- for(r: 0->n)
- mpp[r]++
- maxFreq = max(maxFreq, mpp[r]);
- while("window fails")
- mpp[l]--;

#### Longest Repeating Chararcter Replacement

```js
function sol(str, k) {
  let l = 0;
  let mpp = new Map();
  let maxFreq = 0;

  for (let r = 0; r < str.length; r++) {
    mpp.set(str[r], (mpp.get(str[r]) || 0) + 1);

    maxFreq = Math.max(maxFreq, mpp.get(str[r]));

    while (r - l + 1 - maxFreq > k) {
      mpp.set(s[l], mpp.get(s[l]) - 1);
      l++;
    }

    maxLen = Math.max(maxLen, r - l + 1);
  }
  return maxLen;
}
```

#### 5. Number of Subarray with sum k

- Number of subarrays => **atMostK algorithm** (only positives)
- atMostK => Sliding window
- atMostK(n) - atMostK(n-1)
- n < 0, then return 0
- cnt += r-l+1 , [includes 0 to n, all subarray sums]
- Prefix sum algorithm also works => **Map<sum, freq>**

#### 6. Number of subarrays with k odds

- Solve it

#### 7. Number of substrings containing all three chars

- Trick : All - Not "abc" = Atleast "abc"
- **Number of all subarrays = n\*(n+1)/2**

```js
function sol(str) {
  let n = str.length;
  let max = (n * (n + 1)) / 2;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    let set = new Set();

    for (let j = i; j < n; j++) {
      set.add(str[j]);

      if (set.has("a") && set.has("b") && set.has("c")) {
        break;
      }

      cnt++;
    }
  }

  return max - cnt;
}
```

- Optimal:
- sliding window
- use Map to store the counts of a,b,c
- when windows breaks => slides
- cnt += n - r
- inlcudes all starting from l and ending to r

#### 8. Maximum points you can obtain from k cards

- Solve it
- left--->
- <----left & right--->

#### 9. Longest substring with at most k distinct chars

- practice

#### 10. Longest subarray with k distinct integers

- Solve it

#### 11. Minimum window substring

- Map for storing => window and check
- elements count
- **Pattern:**
- add
- while(true condition)
- update
- then make it false by sliding left

```js
function sol(s, t) {
  let need = new Map();
  for (let char of t) {
    need.set(char, (need.set(char) || 0) + 1);
  }
  let needCnt = need.size;

  let window = new Map();
  let have = 0;

  let l = 0;
  let minLen = Infinity;
  let start = -1;

  for (let r = 0; r < s.length; r++) {
    let rc = s[r];
    window.set(rc, (window.get(rc) || 0) + 1);

    if (need.has(rc) && need.get(rc) === window.get(rc)) {
      have++;
    }

    while (needCnt === have) {
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        start = l;
      }

      let lc = s[l];
      window.set(lc, window.get(lc) - 1);
      if (need.has(lc) && need.get(lc) > window.get(lc)) {
        have--;
      }
      l++;
    }
  }

  return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
```

### 12. Minimum window subsequence

- Revisit
- **Brute Force :**
- Two Loops and temp string
- validate func
- if true => if len < minLen || len === minLen && i < startIndex
- update res string
- Validate function **Pattern :**

```js
let k = 0;
for(let i=0 => n)
if(temp[i] === t[k]) k++
return k === t.length
```

- **Optimal :**
- First validate left to right
- Second validarte right to left , [To minimize the window]
- then if end-start+1 < minLen
- update res
