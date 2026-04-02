var twoPointers = function(prices){
  let l = 0;
  let r = 1;
  let maxi = 0;

  while(r < prices.length){
    if(prices[r] > prices[l]){
      maxi = Math.max(maxi, prices[r] - prices[l]);
    }
    else {
      l = r;
    }
    r++;
  }

  return maxi;
}

let arr = [2, 1, 3, 4, 10, 2];
let res = twoPointers(arr);

console.log(res);