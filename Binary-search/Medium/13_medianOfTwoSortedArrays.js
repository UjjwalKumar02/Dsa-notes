var solution = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return solution(nums2, nums1);
  }

  let smallArr = nums1;
  let largeArr = nums2;

  let small = smallArr.length;
  let large = largeArr.length;

  let low = 0;
  let high = small;

  while (low <= high) {
    let smallPart = Math.floor((low + high) / 2);
    let largePart = Math.floor((small + large + 1) / 2) - smallPart;

    let leftMaxSmall = smallPart === 0 ? -Infinity : smallArr[smallPart - 1];
    let rightMinSmall = smallPart === small ? Infinity : smallArr[smallPart];

    let leftMaxLarge = largePart === 0 ? -Infinity : largeArr[largePart - 1];
    let rightMinLarge = largePart === large ? Infinity : largeArr[largePart];

    if (leftMaxSmall <= rightMinLarge && leftMaxLarge <= rightMinSmall) {
      if ((small + large) % 2 === 0) {
        return (
          (Math.max(leftMaxSmall, leftMaxLarge) +
            Math.min(rightMinSmall, rightMinLarge)) /
          2
        );
      } else {
        return Math.max(leftMaxSmall, leftMaxLarge);
      }
    } else if (leftMaxSmall > rightMinLarge) {
      high = smallPart - 1;
    } else {
      low = smallPart + 1;
    }
  }
};

let nums1 = [1, 3],
  nums2 = [2];

let res = solution(nums1, nums2);

console.log(res);
