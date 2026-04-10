var solution = function(cardPoints, k){
  let n = cardPoints.length;
  let maxSum = 0;
  let sum = 0;

  for(let i=0; i<k; i++){
    sum += cardPoints[i];
  }
  maxSum = Math.max(maxSum, sum);

  let right = n-1;
  for(let i=k-1; i>=0; i--){
    sum -= cardPoints[i];
    sum += cardPoints[right--];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

let cardPoints = [9,7,7,9,7,7,9], k = 7;

let res = solution(cardPoints, k);
console.log(res);