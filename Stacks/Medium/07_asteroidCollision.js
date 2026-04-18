var solution = function(asteroids){
  let n = asteroids.length;
  let st = [];

  for(let num of asteroids){
    let alive = true;

    while(st.length>0 && st[st.length-1] > 0 && num < 0){
      let top = st[st.length-1];
      let absTop = Math.abs(top);
      let absNum = Math.abs(num);

      if(absTop > absNum){
        alive = false;
      }
      else if(absTop === absNum){
        alive = false;
        st.pop();
      }
      else{
        st.pop();
      }

      if(!alive) break;
    }

    if(alive) st.push(num);
  }

  return st;
};

let asteroids = [10, -5, 5];

let res = solution(asteroids);
console.log(res);