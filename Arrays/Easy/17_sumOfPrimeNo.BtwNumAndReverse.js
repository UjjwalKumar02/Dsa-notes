var solution = function (n) {
  let num = n;
  let reverse = 0;

  while (num > 0) {
    let digit = num % 10;

    reverse = reverse * 10 + digit;

    num = Math.floor(num / 10);
  }

  let mini = Math.min(n, reverse);
  let maxi = Math.max(n, reverse);

  let sum = 0;

  for (let i = mini; i <= maxi; i++) {
    if (checkPrime(i)) {
      sum += i;
    }
  }

  return sum;
};

var checkPrime = function (num) {
  if (num <= 1) return false;

  if (num === 2 || num === 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let limit = Math.sqrt(num);

  for (let i = 5; i <= limit; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};
