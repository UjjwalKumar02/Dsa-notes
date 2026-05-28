# Notes:

#### 1. Palindrome partition

- Create all partitions array
- Only visit palindromes array

```js
var backtrack = function (idx, curr, res, s) {
  if (idx === s.length) {
    res.push([...curr]);
    return;
  }

  for (let i = idx; i < s.length; i++) {
    if (isPalindrome(s.substring(idx, i + 1))) {
      curr.push(s.substring(idx, i + 1));
      backtrack(i + 1, curr, res, s);
      curr.pop();
    }
  }
};
```

#### 2. Word search

- Try all starting point

```js
if (backtrack(i, j)) {
  return true;
}
```

- Handle Edge cases
- Dont count the same element twice
- for that, replace the current element with "#"
- backtrack and fix that

#### 3. N queens

- Place 1 queen in each column
- For a column, try all rows (to be safe)
- Place the Queen and backtrack

#### 4. Rat in a maze

- Solve it

- Dfs approach, edge cases
- Current string

#### 5. Word break

- loop for dict (from 0)

```js
var solution = function (s, dict) {
  return recursion("", s, dict);
};

var recursion = function (curr, s, dict) {
  if (curr === s) {
    return true;
  }

  if (curr.length > s.length) return false;

  for (let word of dict) {
    if (recursion(curr + word, s, dict)) {
      return true;
    }
  }

  return false;
};
```

#### 6. M coloring problem

- Two iteration pattern: Node and colors
- Use only one loop => colors
- Maintain a colors array for nodes
- Safe function for checking neighbors
- Visit only safe options

```js
var solution = function (N, E, Edges, M) {
  let graph = new Map();

  for (let i = 0; i < N; i++) {
    graph.set(i, []);
  }
  for (let [n, m] of Edges) {
    graph.get(n).push(m);
    graph.get(m).push(n);
  }

  let colors = new Array(N).fill(0);

  return backtrack(0, graph, colors, M, N);
};

var backtrack = function (node, graph, colors, M, N) {
  if (node === N) return true;

  for (let color = 1; color <= M; color++) {
    if (isSafe(node, graph, color, colors)) {
      colors[node] = color;
      if (backtrack(node + 1, graph, colors, M, N)) {
        return true;
      }
      colors[node] = 0;
    }
  }

  return false;
};

var isSafe = function (node, graph, color, colors) {
  for (let neighbor of graph.get(node)) {
    if (colors[neighbor] === color) {
      return false;
    }
  }

  return true;
};
```

#### 7. Sudoku solver

- Recursion stops when returns true
- Backtrack not happens for that

- If row hits limit, return true
- If col hits limit, move to next row
- If element is non-empty, move to next col
- Loop thru options
- Only visit Safe values
- Make change and backtracks
- Safe function also includes 3\*3 matrix
- `Math.floor(row / 3) * 3` gives the start row (similar for col)

#### 8. Expression add operators

- dfs
- (idx, exp, curr_value, prev_op, res)
- Loop thru starting point method => [this generates all start point substrings]
- Skip leading zero expression
- We are looping thru numbers
- If idx === 0, start point edge case
- dfs(+)
- dfs(-)
- dfs(\*)
