var solution = function(s, t){
  let need = new Map();
  for(let char of t){
    need.set(char, (need.get(char) || 0) + 1);
  }
  let needCount = need.size;

  let window = new Map();
  let have = 0;

  let l = 0;
  let minLen = Infinity;
  let start = 0;

  for(let r=0; r<s.length; r++){
    let c = s[r];
    window.set(c, (window.get(c) || 0) + 1);

    if(need.has(c) && window.get(c) === need.get(c)){
      have++;
    }

    while(have === needCount){
      if(r-l+1 < minLen){
        minLen = r-l+1;
        start = l;
      }

      let le = s[l];
      window.set(le, window.get(le) - 1);

      if(need.has(le) && window.get(le) < need.get(le)){
        have--;
      }
      l++;
    }
  }

  return minLen === Infinity ? "" : s.substring(start, start+minLen);
}

let s = "ADOBECODEBANC", t = "ABC";

let res = solution(s, t);

console.log(res);