# Notes

#### 1. Sliding window pattern

- 1. Window exists
- 2. If window fails => reset the window
- 3. If window fails => slides
- 4. While window is true => update and Fails the window

#### 2. Update Length depending on situation

#### 3. Pattern

- Add
- Check if broken => If broken then slides
- Update len

#### Length of longest substring without duplicates

- Use Map
- Update current element in map
- Then check if the current element has duplicates

```js
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let mpp = new Map();
  let maxi = 0;

  for (let r = 0; r < s.length; r++) {
    mpp.set(s[r], (mpp.get(s[r]) || 0) + 1);

    while (mpp.get(s[r]) > 1) {
      let left = mpp.get(s[l]);

      if (left - 1 === 0) {
        mpp.delete(s[l]);
      } else {
        mpp.set(s[l], left - 1);
      }

      l++;
    }

    maxi = Math.max(maxi, r - l + 1);
  }

  return maxi;
};
```

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
- Always `n - (n-1)`
- atMostK(n) - atMostK(n-1)
- n < 0, then return 0
- cnt += r-l+1 , [includes 0 to n, all subarrays]
- Prefix sum algorithm also works => **Map<sum, freq>**

#### 6. Number of subarrays with k odds

- Solve it

#### 7. Number of substrings containing all three chars

- Optimal:
- sliding window
- use Map to store the counts of a,b,c
- when windows breaks => slides
- cnt += n - r
- [it is equal to the count of subarrays ending at r and after r, as they are valid]

#### 8. Maximum points you can obtain from k cards

- Solve it
- left--->
- <----left & right--->

#### 9. Longest substring with at most k distinct chars

- practice

#### 10. Number of subarray with k distinct integers

- Solve it
- Two concepts:
  - count of subarrays => [atmostk]
  - map use for elements tracking

#### 11. Pattern:

- `count += r - l + 1`
  - counts all substrings ending at r and starting anywhere from l to r.

- `count += n - r`
  - counts all substrings starting at l and ending anywhere from r to n-1.

- `Minimum len Substring result :`
  - We need two variable: minLen and start
  - Same for Maxlen substring result

- `Sliding window pattern :`
  - [When window becomes valid, then update res and slides to make it invalid]

  - 1. Number of substrings containing atleast "a", "b", "c" one times each
    - Map for storing all elements freq
    - While window becomes valid
    - Count all substrings starting at l => as all will be valid
    - Make the window invalid by sliding

  - 2. Minimum window substring
    - Maps for need and has
    - counts for need and has
    - While window becomes valid
    - Records the substring into res
    - At last cover the edge cases
    - Solve it

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

- [Conclusion] : Check if this algorithm works and needed for the case

### 12. Minimum window subsequence

- Revisit

- **Brute Force :**
- Two Loops and temp string
- Validate function
- If valid => if ((len < minLen) || (len === minLen && i < minIndex))
- Update res string
- Validate function => **Pattern :**

```js
let k = 0;

for (let i = 0; i < n; i++) {
  if (temp[i] === t[k]) {
    k++;
  }
}

return k === t.length;
```

- **Optimal :**
- First validate left to right
- Second validarte right to left , [To minimize the window]
- then if end-start+1 < minLen
- update res
