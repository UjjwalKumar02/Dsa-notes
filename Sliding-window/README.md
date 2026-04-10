# Notes

#### 1. Sliding window pattern

- Window exists
- l=0 && r: 0 => n
- slides the l

#### 2. Update Length depending on situation

#### 3. Pattern

- Add
- Check if broken
- Update len

#### 4. Maximum Frequency update in sliding window

- with map
- for(r: 0->n)
- mpp[r]++
- maxFreq = max(maxFreq, mpp[r]);
- while()
- mpp[l]--;

#### 5. Number of Subarray with sum k

- Number of subarrays => atMostK algorithm (only positives)
- atMostK => Sliding window
- atMostK(n) - atMostK(n-1)
- n < 0, then return 0
- cnt += r-l+1
- includes 0 to n, all subarray sums
- Prefix sum algorithm also works
- Map<sum, freq>

#### 6. Number of subarrays with k odds

- Solve it

#### 7. Number of substrings containing all three chars

- Trick : All - Not "abc" = Atleast "abc"
- All = n\*(n+1)/2
- use Map to store the counts
- Optimal:
- sliding window
- cnt += n - r
- inlcudes all starting from l and ending to r

#### 8. Maximum points you can obtain from k cards

- Solve it
- left--->
- <----left
- right--->

#### 9. Longest substring with at most k distinct chars

- practice

#### 10. Longest subarray with k distinct integers

- Solve it

#### 11. Minimum window substring

- Solve it
- Map for storing => window and check
- elements count
- Pattern:
- add
- while(true condition)
- update
- then make it false by sliding left

### 12. Minimum window subsequence

- Revisit
