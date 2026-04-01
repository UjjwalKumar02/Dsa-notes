// ------------------------------Solution 1---------------------------------
function rightRotateK(nums, k) {
  let n = nums.length;

  for (let i = 0; i < k; i++) {
    let temp = nums[n - 1];

    for (let i = n - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }

    nums[0] = temp;
  }
}

// -------------------------------Solution 2----------------------------
var reverse = function(start, end, nums){
  let stack = [];

  for(let i=start; i<=end; i++){
    stack.push(nums[i]);
  }

  for(let i=start; i<=end; i++){
    let temp = stack[stack.length - 1];
    nums[i] = temp;
    stack.pop();
  }
}

var rightRotate = function(nums, k){
  let n = nums.length;

  reverse(0, n-1, nums);
  reverse(0, k-1, nums);
  reverse(k, n-1, nums);
}

let arr = [1, 2, 3, 4, 5];
rightRotate(arr, 3);

console.log(arr);
