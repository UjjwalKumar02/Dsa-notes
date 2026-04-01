var linearSearch = function(nums, x){
  for(let i=0; i<nums.length; i++){
    if(nums[i] === x){
      return i;
    }
  }

  return -1;
}

let arr = [0, 1, 2, 3, 4, 5];
let res = linearSearch(arr, 4);

console.log(res);