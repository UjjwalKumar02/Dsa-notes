var solution = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 !== 0) {
      return num.slice(0, i + 1);
    }
  }

  return " ";
};

let str = "52";
let res = solution(str);

console.log(res);
