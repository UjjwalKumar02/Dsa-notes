// -----------------------Solution 1-----------------------
var bruteForce = function (nums) {
  let n = nums.length;
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let maxi = num;
    let idx = (i + 1) % n;

    while (idx !== i) {
      if (maxi !== num) break;
      maxi = Math.max(maxi, nums[idx]);
      idx = (idx + 1) % n;
    }

    res.push(maxi === num ? -1 : maxi);
  }

  return res;
};

// ----------------------------------Solution 2----------------------------
var optimal = function (nums) {
  let n = nums.length;
  let st = [];
  let res = new Array(n).fill(-1);

  for (let i = 2 * n - 1; i >= 0; i--) {
    let idx = i % n;

    while (st.length > 0 && st[st.length - 1] <= nums[idx]) {
      st.pop();
    }

    if (i < n) {
      if (st.length > 0) res[idx] = st[st.length - 1];
    }

    st.push(nums[idx]);
  }

  return res;
};

let nums = [1, 2, 3, 4, 3];

let res1 = bruteForce(nums);
let res2 = optimal(nums);

console.log(res1);
console.log(res2);
