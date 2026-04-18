/**
 * 
 * @param {number} x
 * @returns {boolean} 
 */
var solution = function(x){
  if(x < 0) return false;
  if(x % 10 === 0 && x !== 0) return 0;

  let reverse = 0;

  while(x > reverse){
    let digit = x % 10;
    reverse = reverse*10 + digit;
    x = Math.floor(x/10);
  }

  return x === reverse || x === Math.floor(reverse/10);
};