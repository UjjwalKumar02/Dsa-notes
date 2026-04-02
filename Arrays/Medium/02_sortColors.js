// -------------------------------Solution 1------------------------
var bruteForce = function(nums){
  let temp = mergeSort(nums, 0, nums.length-1);

  for(let i=0; i<temp.length; i++){
    nums[i] = temp[i];
  }
};

var mergeSort = function(nums, start, end){
  if(start >= end) return [nums[start]];

  let mid = start + Math.floor((end - start)/2);

  let left = mergeSort(nums, start, mid);
  let right = mergeSort(nums, mid+1, end);

  let l = 0, r = 0;
  let res = [];

  while(l < left.length && r < right.length){
    if(left[l] < right[r]){
      res.push(left[l]);
      l++;
    } else {
      res.push(right[r]);
      r++;
    }
  }

  while(l < left.length){
    res.push(left[l]);
    l++;
  }
  while(r< right.length){
    res.push(right[r]);
    r++;
  }

  return res;
};

// ---------------------------------Solution 2----------------------------------
var countingSol = function(nums){
  let count0 = 0, count1 = 0, count2 = 0;

  for(let num of nums){
    if(num === 0) count0++;
    if(num === 1) count1++;
    if(num === 2) count2++;
  }

  let i=0;
  while(count0 > 0){
    nums[i++] = 0;
    count0--;
  }
  while(count1 > 0){
    nums[i++] = 1;
    count1--;
  }
  while(count2 > 0){
    nums[i++] = 2;
    count2--;
  }
}

// -----------------------Solution 3----------------------------------
var optimal = function(nums){
  let left = 0, mid = 0, right = nums.length-1;

  while(mid <= right){
    if(nums[mid] === 0){
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      left++;
      mid++;
    }
    else if(nums[mid] === 1){
      mid++;
    }
    else {
      [nums[mid], nums[right]] = [nums[right], nums[mid]];
      right--;
    }
  }
}

let arr1 = [1, 0, 2, 1, 0, 0, 2];
let arr2 = [1, 0, 2, 1, 0, 0, 2];
let arr3 = [1, 0, 2, 1, 0, 0, 2];
bruteForce(arr1);
countingSol(arr2);
optimal(arr3);

console.log(arr1);
console.log(arr2);
console.log(arr3);