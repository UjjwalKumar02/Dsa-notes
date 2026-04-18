var solution = function (nums) {
  let n = nums.length;
  let st = [];

  let leftSmall = new Array(n);
  for (let i = 0; i < n; i++) {
    while (st.length > 0 && nums[st[st.length - 1]] > nums[i]) {
      st.pop();
    }

    leftSmall[i] = st.length > 0 ? i - st[st.length - 1] : i + 1;

    st.push(i);
  }

  st = [];
  let rightSmall = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && nums[st[st.length - 1]] >= nums[i]) {
      st.pop();
    }

    rightSmall[i] = st.length > 0 ? st[st.length - 1] - i : n - i;

    st.push(i);
  }

  st = [];
  let leftLarge = new Array(n);
  for (let i = 0; i < n; i++) {
    while (st.length > 0 && nums[st[st.length - 1]] < nums[i]) {
      st.pop();
    }

    leftLarge[i] = st.length > 0 ? i - st[st.length - 1] : i + 1;

    st.push(i);
  }

  st = [];
  let rightLarge = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && nums[st[st.length - 1]] <= nums[i]) {
      st.pop();
    }

    rightLarge[i] = st.length > 0 ? st[st.length - 1] - i : n - i;

    st.push(i);
  }

  let res = 0;

  for (let i = 0; i < n; i++) {
    res += nums[i] * leftLarge[i] * rightLarge[i];
    res -= nums[i] * leftSmall[i] * rightSmall[i];
  }

  return res;
};

let nums = [4,-2,-3,4,1];

let res = solution(nums);
console.log(res);
