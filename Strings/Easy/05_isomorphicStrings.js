var solution = function(s, t){
  let mapST = new Map();
  let mapTS = new Map();

  for(let i=0; i<s.length; i++){
    let sc = s[i];
    let tc = t[i];

    if(mapST.has(sc) && mapST.get(sc) !== tc) return false;
    if(mapTS.has(tc) && mapTS.get(tc) !== sc) return false;

    mapST.set(sc, tc);
    mapTS.set(tc, sc);
  }

  return true;
}

let s = "f11", t = "b23"
let res = solution(s, t);

console.log(res);