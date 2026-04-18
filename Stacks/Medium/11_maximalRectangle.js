var solution = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let res = 0;
  let temp = new Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === "1") temp[j]++;
      else temp[j] = 0;
    }

    res = Math.max(res, maxArea(temp));
  }

  return res;
};

var maxArea = function (arr) {
  let n = arr.length;

  let st = [];
  let left = new Array(n);

  for (let i = 0; i < n; i++) {
    while (st.length > 0 && arr[st[st.length - 1]] > arr[i]) {
      st.pop();
    }

    left[i] = st.length > 0 ? i - st[st.length - 1] : i + 1;

    st.push(i);
  }

  st = [];
  let right = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
      st.pop();
    }

    right[i] = st.length > 0 ? st[st.length - 1] - i : n - i;

    st.push(i);
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    res = Math.max(res, arr[i] * (left[i] + right[i] - 1));
  }

  return res;
};

let matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

let res = solution(matrix);

console.log(res);
