function solution(s){
  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;

  const solve = (i, sign, started, num) => {
    if(i >= s.length){
      return num * sign;
    }

    let ch = s[i];

    if(!started && ch === " "){
      return solve(i+1, sign, false, num);
    }

    if(!started && (s[i] === "+" || s[i] === "-")){
      return solve(i+1, ch === "-" ? -1 : 1, true, num);
    }

    if(ch < '0' || ch > '9'){
      return num * sign;
    }
    
    let digit = ch.charCodeAt(0) - '0'.charCodeAt(0);

    let newNum = num * 10 + digit;
    let value = sign * newNum;

    if(value < INT_MIN) return INT_MIN;
    if(value > INT_MAX) return INT_MAX;

    return solve(i+1, sign, true, newNum);
  };

  return solve(0, 1, false, 0);
};