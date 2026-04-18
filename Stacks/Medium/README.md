# Notes

#### 1. Next greater element

- Loop from end
- stack.pop while smaller elements on top
- res.push() -1 if empty and else top
- stack.push() currElement

#### 2. Next greater element (circular)

- Double iteration from end
- i = 2\*n-1 ==> 0
- same approach
- only push in the later iteration\

#### 3. Next smaller element

- Solve it

#### 4. Number of NGE

- Solve it

#### 5. Raining tapwater

- water += Math.min(leftMax, rightMax) - height[i]
- make arrays of leftMax and rightMax

#### 6. Sum of Subarray Minimums

- one loop for finding leftmost nearest minimum
- add the index+1 to left array
- one loop for finding rightmost nearest minimum
- add the n - index to right array
- why index ==> storing length
- sum += arr[i] _ left[i] _ right[i]
- left[i] \* right[i] ==> gives no. of array in which i th is min

#### 7. Asteroid collision

- Solve it
- collison only happens when curr is neg and prev is pos
- inside collision while curr element is alive, loop stays
- `let mod = 1e9 + 7` ==> 10^9 + 7

#### 8. Sum of subarrays range

- Solve it

#### 9. Remove k digits

- Solve it
- **Pattern**
- Loop thru and (while stack exists check something) and at last push to stack
- Cover edge cases

#### 10. Largest rectangle in histogram

- [Brute force]: Start point and expand both sides
- [Optimal]: stack
- solve

#### 11. Maximal rectangle

- Its length
- solve
