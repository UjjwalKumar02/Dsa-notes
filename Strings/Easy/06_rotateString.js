// ------------------------Solution 1----------------------------------
var solution = function(s, goal){
  if(s.length !== goal.length) return false;

  let n = s.length;
  let arr = s.split("");

  for(let i=0; i<n; i++){
    let temp = arr[0];
    for(let i=0; i<n-1; i++){
      arr[i] = arr[i+1];
    }
    arr[n-1] = temp;

    if(arr.join("") === goal){
      return true;
    }
  }

  return false;
}

// --------------------------Solution 2---------------------------------
var optimal = function(s, goal){
  if(s.length !== goal.length) return false;

  return (s + s).includes(goal);
}

let s = "abcde", goal = "abced";
let res1 = solution(s, goal);
let res2 = optimal(s, goal);

console.log(res1);
console.log(res2);