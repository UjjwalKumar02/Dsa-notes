// ------------------------Solution 1---------------------------------
var union = function (nums1, nums2) {
  let st = new Set();

  for (let num of nums1) {
    st.add(num);
  }

  for (let num of nums2) {
    st.add(num);
  }

  let res = [...st];
  res.sort((a, b) => a - b);

  return res;
};

// ----------------------------Solution 2------------------------------------
var optimal = function (nums1, nums2) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    let left = nums1[i];
    let right = nums2[j];

    if (left < right) {
      res.push(left);
      i++;
    } else if (left == right) {
      res.push(left);
      i++;
      j++;
    } else {
      res.push(right);
      j++;
    }
  }

  while (i < nums1.length) {
    res.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    res.push(nums2[j]);
    j++;
  }

  return res;
};

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 4, 8, 9];

let res = optimal(arr1, arr2);

console.log(res);
