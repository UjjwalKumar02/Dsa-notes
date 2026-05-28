var solution = function(candidates, target){
  let res = [];
  let curr = [];

  recursion(0, target, curr, candidates, res);

  return res;
};

var recursion = function(idx, left, curr, arr, res){
  if(idx === arr.length){
    if(left === 0){
      res.push([...curr]);
    }

    return;
  }

  if(arr[idx] <= left){
    curr.push(arr[idx]);
    recursion(idx, left - arr[idx], curr, arr, res);
    curr.pop();
  }

  recursion(idx + 1, left, curr, arr, res);
};

let candidates = [2,3,6,7], target = 7;

let res = solution(candidates, target);

console.log(res);