// -------------------------------Solution 1------------------------------
var twoLoops = function(nums, k){
  let n = nums.length;
  let maxLen = 0;

  for(let i=0; i<n; i++){
    let sum = 0;
    
    for(let j=i; j<n; j++){
      sum += nums[j];
  
      if(sum === k){
        maxLen = Math.max(maxLen, j - i + 1);
      }

       if(sum > k){
        break;
      }
    }
  }

  return maxLen;
}

// --------------------------------Solution 2---------------------------------
var slidingWindow = function(nums, k){
  let n = nums.length;
  let l = 0;
  let maxLen = 0;
  let sum = 0;

  for(let r=0; r<n; r++){
    sum += nums[r];

    while(l<r && sum > k){
      sum -= nums[l];
      l++;
    }

    if(sum === k){
      maxLen = Math.max(maxLen, r-l+1);
    }
  }

  return maxLen;
}

let arr = [1, 0, 1, 2, 3, 0, 4];
let res1 = twoLoops(arr, 5);
let res2 = slidingWindow(arr, 5);

console.log(res1, res2);