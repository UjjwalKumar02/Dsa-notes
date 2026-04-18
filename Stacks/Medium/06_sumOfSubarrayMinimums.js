/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
var solution = function (arr) {
  let n = arr.length;
  let left = new Array(n);
  let st = [];

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

  let mod = 1e9 + 7;
  let res = 0;
  for (let i = 0; i < n; i++) {
    res = (res + arr[i] * left[i] * right[i]) % mod;
  }

  return res;
};

let arr = [11, 81, 94, 43, 3];

let res = solution(arr);
console.log(res);
