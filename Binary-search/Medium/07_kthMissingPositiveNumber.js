// -----------------------Solution 1--------------------------
var bruteForce = function (arr, k) {
  let prev = 0;

  for (let i = 0; i < arr.length; i++) {
    let gap = arr[i] - prev - 1;

    if (gap >= k) {
      return prev + k;
    }

    k -= gap;
    prev = arr[i];
  }

  return prev + k;
};

// ---------------------Solution 2------------------------
var binarySearch = function (arr, k) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    let missing = arr[mid] - (mid + 1);

    if (missing >= k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l + k;
};

let arr = [2, 3, 4, 7, 11],
  k = 5;

let res1 = bruteForce(arr, k);
let res2 = binarySearch(arr, k);

console.log(res1);
console.log(res2);
