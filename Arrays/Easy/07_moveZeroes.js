// -------------------------Solution 1-------------------------------------
var moveZeroes = function(nums){
  let temp = [];

  for(let num of nums){
    if(num !== 0){
      temp.push(num);
    }
  }

  for(let i=0; i<temp.length; i++){
    nums[i] = temp[i];
  }

  for(let i=temp.length; i<nums.length; i++){
    nums[i] = 0;
  }
}

// -----------------------------Solution 2----------------------------------------
var optimal = function(nums){
  let lastSeenZero = 0;

  for(let i=0; i<nums.length; i++){
    if(nums[i] !== 0){
      nums[lastSeenZero++] = nums[i];
    }
  }

  for(let i=lastSeenZero; i<nums.length; i++){
    nums[i] = 0;
  }
}

let arr = [1, 0, 2, 0, 3, 0];
optimal(arr);

console.log(arr);