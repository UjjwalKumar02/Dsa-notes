function removeDuplicates(nums) {
  let st = new Set(nums);

  let i = 0;
  for (let num of st) {
    nums[i++] = num;
  }

  nums.length = i;
  return nums.length;
}

let arr = [1, 2, 2, 3, 4, 5];
removeDuplicates(arr);
console.log(arr);
