var solution = function (arr, indices) {
  let res = [];

  for (let idx of indices) {
    let num = arr[idx];
    let cnt = 0;
    let i = idx + 1;

    while (i < arr.length) {
      if (arr[i++] > num) {
        cnt++;
      }
    }

    res.push(cnt);
  }

  return res;
};

let arr = [3, 4, 2, 7, 5, 8, 10, 6],
  indices = [0, 5];

let res = solution(arr, indices);
console.log(res);
