// --------------------------Solution 1----------------------------------
var bruteForce = function (heights) {
  let n = heights.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    let mini = heights[i];
    let start = i;
    while (start > 0 && heights[start - 1] >= mini) {
      start--;
    }

    let end = i;
    while (end < n - 1 && heights[end + 1] >= mini) {
      end++;
    }

    res = Math.max(res, mini * (end - start + 1));
  }

  return res;
};

// -----------------------------------Solution 2---------------------------
var optimal = function (heights) {
  let n = heights.length;
  let st = [];

  let leftWidth = new Array(n);
  for (let i = 0; i < n; i++) {
    while (st.length > 0 && heights[st[st.length - 1]] > heights[i]) {
      st.pop();
    }

    leftWidth[i] = st.length > 0 ? i - st[st.length - 1] : i + 1;

    st.push(i);
  }

  st = [];
  let rightWidth = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && heights[st[st.length - 1]] >= heights[i]) {
      st.pop();
    }

    rightWidth[i] = st.length > 0 ? st[st.length - 1] - i : n - i;

    st.push(i);
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    res = Math.max(res, heights[i] * (leftWidth[i] + rightWidth[i] - 1));
  }

  return res;
};

let heights1 = [2, 1, 5, 6, 2, 3];
let heights2 = [2, 1, 5, 6, 2, 3];

let res1 = bruteForce(heights1);
let res2 = optimal(heights2);

console.log(res1);
console.log(res2);
