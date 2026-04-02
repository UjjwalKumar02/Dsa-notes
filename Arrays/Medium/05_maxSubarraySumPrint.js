var kaydaneAlgo = function(nums){
  let sum = 0;
  let maxSum = nums[0];
  let start = 0;
  let tempStart = 0;
  let end = 0;

  for(let i=0; i<nums.length; i++){
    sum += nums[i];

    if(sum > maxSum){
      maxSum = sum;
      start = tempStart;
      end = i;
    }

    if(sum < 0){
      sum = 0;
      tempStart = i+1;
    }
  }

  let res = nums.slice(start, end+1);

  console.log(res);
  console.log(maxSum);
}

let arr = [1, 3, 90, 0, 0, -10, 2];
kaydaneAlgo(arr);