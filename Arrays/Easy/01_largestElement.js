function largestElement(nums){
  let res = 0;

  for(let num of nums){
    if(num > res){
      res = num;
    }
  }

  return res;
}

let nums = [1, 9, 10, 0, 8];
let max = largestElement(nums);

console.log(max);