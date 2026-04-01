// -------------------- Solution 1-------------------------------------
function isSortedAndRotated(nums) {
  let n = nums.length;

  let rotated = false;
  let rotatedIdx = 0;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      rotated = true;
      rotatedIdx = i + 1;
      break;
    }
  }

  if (rotated && nums[n - 1] > nums[0]) {
    return false;
  }

  if (rotated) {
    for (let i = 0; i < rotatedIdx - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }

    for (let i = rotatedIdx; i < n - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < n - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }
  }

  return true;
}



// -----------------------Solution 2-------------------------------------
function optimal(nums){
  let n = nums.length;
  let cnt = 0;

  for(let i=0; i<n; i++){
    if(nums[i] > nums[(i+1) % n]){
      cnt++;
    }
  }

  return cnt <= 1;
}





let nums = [3, 4, 5, 1, 2];
let res = optimal(nums);

console.log(res);