// ----------------------Solution 1------------------------------------
var twoLoops = function(nums){
  let n = nums.length;
  let maxOnes = 0;

  for(let i=0; i<n; i++){
    let ones = 0;

    for(let j=i; j<n; j++){
      if(nums[j] === 0){
        break;
      }
      ones++;
    }

    maxOnes = Math.max(maxOnes, ones);
  }

  return maxOnes;
}


// ----------------------------------Solution 2----------------------------------
var slidingWindow = function(nums){
  let n = nums.length;
  let l = 0;
  let maxOnes = 0;

  for(let r=0; r<n; r++){
    if(nums[r] === 0){
      l = r+1;
    }

    maxOnes = Math.max(maxOnes, r-l+1);
  }

  return maxOnes;
}

let arr = [1, 0, 1, 1, 1, 1, 0];
let res1 = twoLoops(arr);
let res2 = slidingWindow(arr);

console.log(res1);
console.log(res2);