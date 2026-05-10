var solution = function (nums1, nums2, k) {
  if (nums1.length > nums2.length) {
    return solution(nums2, nums1, k);
  }

  let small = nums1.length;
  let large = nums2.length;

  let low = Math.max(0, k - large);
  let high = Math.min(k, small);

  while (low <= high) {
    let cntSmall = Math.floor((low + high) / 2);
    let cntLarge = k - cntSmall;

    let leftMaxSmall = cntSmall === 0 ? -Infinity : nums1[cntSmall - 1];
    let rigthMinSmall = cntSmall === small ? Infinity : nums1[cntSmall];

    let leftMaxLarge = cntLarge === 0 ? -Infinity : nums2[cntLarge - 1];
    let rigthMinLarge = cntLarge === large ? Infinity : nums2[cntLarge];

    if (leftMaxSmall <= rigthMinLarge && leftMaxLarge <= rigthMinSmall) {
      return Math.max(leftMaxSmall, leftMaxLarge);
    } else if (leftMaxSmall > rigthMinLarge) {
      high = cntSmall - 1;
    } else {
      low = cntSmall + 1;
    }
  }
};

let a = [2, 3, 6];
b = [7, 9];
k = 4;

let res = solution(a, b, k);

console.log(res);
