// --------------------------------Solution 1----------------------------
var bruteForce = function (nums) {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let maxi = num;
    let idx = i;

    while (idx < nums.length) {
      if (maxi !== num) break;
      maxi = Math.min(maxi, nums[idx++]);
    }

    res.push(maxi === num ? -1 : maxi);
  }

  return res;
};

// ---------------------------Solution 2--------------------------
var optimal = function (nums) {
  let n = nums.length;
  let st = [];
  let res = new Array(n).fill(-1);

  for (let i = n - 1; i >= 0; i--) {
    let num = nums[i];

    while (st.length > 0 && st[st.length - 1] >= num) {
      st.pop();
    }

    if (st.length > 0) {
      res[i] = st[st.length - 1];
    } else {
      res[i] = -1;
    }

    st.push(num);
  }

  return res;
};

let  arr = [10, 9, 8, 7];

let res1 = bruteForce(arr);
let res2 = optimal(arr);

console.log(res1);
console.log(res2);
