var solution = function(nums, k){
  return atMostK(nums, k) - atMostK(nums, k-1);
}

var atMostK = function(nums, k){
  if(k < 0) return 0;

  let n = nums.length;
  let l = 0;
  let mpp = new Map();
  let cnt = 0;

  for(let r=0; r<n; r++){
    mpp.set(nums[r], (mpp.get(nums[r]) || 0) + 1);

    while(mpp.size > k){
      let freq = mpp.get(nums[l]) - 1;
      mpp.set(nums[l], freq);
      if(freq === 0){
        mpp.delete(nums[l]);
      }
      l++;
    }

    cnt += r-l+1;
  }

  return cnt;
}

let nums = [1,2,1,2,3], k = 2;

let res = solution(nums, k);

console.log(res);