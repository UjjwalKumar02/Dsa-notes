// --------------------------Solution 1------------------------
var bruteForce = function (nums1, nums2) {
  let res = [];

  for (let num of nums1) {
    let maxi = num;
    let idx = nums2.findIndex((x) => x === num);

    while (idx < nums2.length) {
      if (maxi !== num) break;
      maxi = Math.max(maxi, nums2[idx++]);
    }

    res.push(maxi === num ? -1 : maxi);
  }

  return res;
};

// -----------------------------Solution 2-------------------------
var optimal = function (nums1, nums2) {
  let stack = [];
  let mpp = new Map();

  for (let i = nums2.length - 1; i >= 0; i--) {
    let num = nums2[i];

    while (stack.length > 0 && stack[stack.length - 1] <= num) {
      stack.pop();
    }

    mpp.set(num, stack.length > 0 ? stack[stack.length - 1] : -1);

    stack.push(num);
  }

  let res = [];

  for (let num of nums1) {
    res.push(mpp.get(num));
  }

  return res;
};

let nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];

let res1 = bruteForce(nums1, nums2);
let res2 = optimal(nums1, nums2);

console.log(res1);
console.log(res2);
