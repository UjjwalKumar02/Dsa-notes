var solution =  function(s){
  let mpp = new Map();
  mpp.set("I", 1);
  mpp.set("V", 5);
  mpp.set("X", 10);
  mpp.set("L", 50);
  mpp.set("C", 100);
  mpp.set("D", 500);
  mpp.set("M", 1000);

  let res = 0;
  let prev = 0;

  for(let i=s.length-1; i>=0; i--){
    let curr = mpp.get(s[i]);

    if(curr < prev){
      res -= curr;
    } else {
      res += curr;
    }

    prev = curr;
  }
  
  return res;
}

let s = "MCMXCIV";
let res = solution(s);

console.log(res);