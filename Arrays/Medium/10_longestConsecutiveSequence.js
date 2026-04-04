// ---------------------Solution 1---------------------
var twoLoops = function (nums) {
  let temp = [...nums];
  temp.sort((a, b) => a - b);
  let n = temp.length;
  let maxi = 0;

  for (let i = 0; i < n; i++) {
    let len = 1;

    for (let j = i; j < n - 1; j++) {
      if (temp[j + 1] === temp[j]) continue;
      if (temp[j + 1] === temp[j] + 1) {
        len++;
        continue;
      }
      break;
    }

    maxi = Math.max(maxi, len);
  }

  return maxi;
};

// ---------------------Solution 2------------------------
var hashSet = function (nums) {
  let st = new Set(nums);
  let maxi = 0;

  for (let num of st) {
    if (!st.has(num - 1)) {
      let curr = num;
      let len = 0;

      while (st.has(curr)) {
        len++;
        curr++;
      }

      maxi = Math.max(maxi, len);
    }
  }

  return maxi;
};

let arr = [100, 4, 200, 1, 3, 2];

let res1 = twoLoops(arr);
let res2 = hashSet(arr);

console.log(res1);
console.log(res2);
