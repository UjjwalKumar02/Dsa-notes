// -----------------------------Solution 1-----------------------
const MOD = 1000000007n;

var bruteForce = function (n) {
  return Number(helper1(1n, 0, n));
};

var helper1 = function (res, i, n) {
  if (i === n) return res;

  if (i % 2 === 0) {
    res = (res * 5n) % MOD;
    res = helper1(res, i + 1, n);
  } else {
    res = (res * 4n) % MOD;
    res = helper1(res, i + 1, n);
  }

  return res;
};

// --------------------------------Solution 2--------------------------------
var optimal = function (n) {
  let evenIndexed = BigInt(Math.ceil(n / 2));
  let oddIndexed = BigInt(Math.floor(n / 2));

  let evenCounts = helper2(5n, evenIndexed);
  let oddCounts = helper2(4n, oddIndexed);

  return Number(evenCounts * oddCounts) % MOD;
};

var helper2 = function (base, exp) {
  let res = 1n;

  while (exp > 0n) {
    if (exp % 2n === 1n) {
      res = (res * base) % MOD;
    }

    base = (base * base) % MOD;
    exp = exp / 2n;
  }

  return res;
};
