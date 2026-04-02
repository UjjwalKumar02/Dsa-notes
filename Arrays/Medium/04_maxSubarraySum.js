// ------------------------------Solution 1-------------------------
var twoLoops = function(nums){
  let n = nums.length;
  let maxSum = nums[0];

  for(let i=0; i<n; i++){
    let sum = nums[i];

    for(let j=i+1; j<n; j++){
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

// -----------------------------Solution 2------------------------------------
var kaydaneAlgo = function(nums){
  let sum = 0;
  let maxSum = nums[0];

  for(let num of nums){
    sum += num;
    maxSum = Math.max(maxSum, sum);

    if(sum < 0){
      sum = 0;
    }
  }

  return maxSum;
}


let arr = [1, 3, 90, 0, 0, -10, 2];
let res1 = twoLoops(arr);
let res2 = kaydaneAlgo(arr);

console.log(res1);
console.log(res2);