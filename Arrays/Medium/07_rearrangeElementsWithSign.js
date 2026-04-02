// ---------------------------------Solution 1------------------------------
var bruteForce = function(nums){
  let pos = [];
  let neg = [];
  let res = [];

  for(let num of nums){
    if(num >= 0) pos.push(num);
    else neg.push(num);
  }

  let j = 0;
  let k = 0;
  for(let i=0; i<nums.length; i++){
    if(i % 2 === 0){
      res[i] = pos[j++];
    } else {
      res[i] = neg[k++];
    }
  }

  return res;
}

// -----------------------------Solution 2--------------------------------
var optimal = function(nums){
  let pos = 0;
  let neg = 1;
  let res = [];

  for(let num of nums){
    if(num >= 0){
      res[pos] = num;
      pos += 2;
    }
    else {
      res[neg] = num;
      neg += 2;
    }
  }

  return res;
}


let arr = [1, 0, -1, -2, 8, 9, -6, -7];
let res1 = bruteForce(arr);
let res2 = optimal(arr);

console.log(res1);
console.log(res2);