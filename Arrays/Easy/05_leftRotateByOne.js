function leftRotate(nums) {
  let n = nums.length;
  let temp = nums[0];

  for (let i = 0; i < n - 1; i++) {
    nums[i] = nums[i + 1];
  }

  nums[n - 1] = temp;

  return nums;
}

let arr = [1, 2, 3, 4];
leftRotate(arr);

console.log(arr);
