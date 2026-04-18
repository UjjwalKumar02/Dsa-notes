/**
 *
 * @param {string} num
 * @param {number} k
 * @returns {string}
 */
var solution = function (num, k) {
  if (num.length === k) return "0";

  let st = [];
  let remove = k;

  for (let n of num) {
    while (st.length > 0 && st[st.length - 1] > n) {
      if (remove > 0) {
        remove--;
        st.pop();
      }

      if (remove === 0) break;
    }

    st.push(n);
  }

  while (remove > 0) {
    remove--;
    st.pop();
  }

  let res = st.join("");

  while (res.length > 1 && res[0] === "0") {
    res = res.slice(1);
  }

  return res === "" ? "0" : res;
};

let num = "1432219",
  k = 3;

let res = solution(num, k);
console.log(res);
