### Important Points to remember:

- **Remove outer parentheses**:
  - Depth variable
  - On opening: First check then increment
  - On closing: First decrement then check

- **Reverse words in a string**:
  - Iterate from end
  - Append from start to the temp string
  - `.trim().split(/\s+/g).reverse().join(" ")`

- **Largest odd number**:
  - Iterate from end
  - parseInt
  - return .slice()

- **Longest common prefix**:
  - Common string function
  - find common min len
  - Check the first string characters with respect to all other string chars

- **Isomorphic string**:
  - Two maps: a=>b, b=>a
  - Check if present and not equal to
  - Set maps
- **Rotate strings**:
  - Rotate using array
  - Rotation unitl the length of string
  - and check if equals to goal
  - `(s+s).includes(goal)`

- **Valid anagram**:
  - `s.split("").sort().join()`
  - Frequency map: increment and decrement after
