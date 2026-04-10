var solution = function(s){
  let n = s.length;
  let l = 0;
  let maxLen = 0;
  let st = new Set();

  for(let r=0; r<n; r++){
    while(st.has(s[r])){
      st.delete(s[l]);
      l++;
    }

    st.add(s[r]);
    maxLen = Math.max(maxLen, r-l+1);
  }

  return maxLen;
}

let s = "abcabcbb";

let res = solution(s);
console.log(res);