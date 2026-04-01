function secondLargest(nums){
  let large = 0;
  let secLarge = 0;

  for(let num of nums){
    if(num > large){
      secLarge = large;
      large = num;
    }

    if(num > secLarge && num !== large){
      secLarge = num;
    }
  }

  return secLarge;
}

let nums = [1, 10 , 9, 0, 7];
let secMax = secondLargest(nums);

console.log(secMax);