var solution = function(nums, k){
  return atMostK(nums, k) - atMostK(nums, k-1);
}

var atMostK = function(nums, k){
  if(k < 0) return 0;

  let n = nums.length;
  let l = 0;
  let odd = 0;
  let cnt = 0;

  for(let r=0; r<n; r++){
    if(nums[r] %2 !== 0) odd++;

    while(odd > k){
      if(nums[l] %2 !== 0) odd--;
      l++;
    }

    cnt += r-l+1;
  }

  return cnt;
}

let nums = [2,2,2,1,2,2,1,2,2,2], k = 2

let res = solution(nums, k);

console.log(res);