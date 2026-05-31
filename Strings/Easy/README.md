# Revision Notes:

#### 0. Valid parentheses

- Depth variable
- If at any point, depth goes negative => Invalid

```js
function isValidParentheses(str) {
  let depth = 0;

  for (let ch of str) {
    if (ch === "(") depth += 1;
    else if (ch === ")") depth -= 1;

    if (depth < 0) return false;
  }

  return depth === 0;
}
```

#### 1. Remove outer parentheses:

- Depth variable
- For the first opening tag => depth = 0
- For the last closing tag => depth = 1
- Also have to acknowledge their effects on depth variable

```js
var removeOuterParentheses = function (s) {
  let depth = 0;
  let res = "";

  for (let ch of s) {
    if (ch === "(") {
      if (depth === 0) {
        depth++;
        continue;
      }

      depth++;
      res += ch;
    } else if (ch === ")") {
      if (depth === 1) {
        depth--;
        continue;
      }

      depth--;
      res += ch;
    }
  }

  return res;
};
```

#### 2. Reverse words in a string:

- `.trim().split(/\s+/g).reverse().join(" ")`

```c++
string solution(string s){
  vector<string> words;
  string temp = "";

  for(char c : s){
    if(c != ' ') temp += c;
    else{
      if(!temp.empty()) words.push_back(temp);
      temp = "";
    }
  }
  if(!temp.empty()) words.push_back(temp);

  string res = "";
  for(int i=words.size()-1; i>=0; i--){
    res += words[i];
    if(i != 0) res += ' ';
  }
  return res;
}
```

#### 3. Largest odd number:

- Iterate from end
- parseInt
- return num.slice(0, i + 1);
- .slice(start, end)

#### 4. Longest common prefix:

- Find adjacent common len
- update min len
- cover edge case

- `.substr(start, length) in c++`

- [other_sol]: Check the first string characters with respect to all other string chars

```c++
string solution(vector<string> &strs){
  if(strs.size() == 0) return "";
  if(strs.size() == 1) return strs[0];

  int mini = 0;

  for(int i=0; i<strs.size()-1; i++){
    string str1 = strs[i];
    string str2 = strs[i+1];

    int n = min(str1.length(), str2.length());
    int len = 0;

    for(int j=0; j<n; j++){
      if(str1[j] != str2[j]) break;
      else len++;
    }

    mini = min(mini, len);
  }

  return strs[0].substr(0, mini);
}
```

#### 5. Isomorphic string:

- solve it
- Two maps: a=>b, b=>a
- Check if they are present or not
- If not set them
- Else check the validity

#### 6. Rotate strings:

- No. of Rotation = length of the string
- and check if equals to goal

- Rotation in string

```js
str = str.slice(1) + str[0];
```

- [Optimal solution]:
- `(s+s).includes(goal)`

- [C++ solution]: Rotation is same as arrays for strings in c++

```c++
bool solution(string s, string goal){
  for(int i=0; i<s.length(); i++){
    char temp = s[0];

    for(int i=0; i<s.length()-1; i++){
      s[i] = s[i+1];
    }

    s[s.length()-1] = temp;

    if(s == goal) return true;
  }

  return false;
}
```

#### 7. Valid anagram:

- Frequency map: increment and decrement after
- check map size == 0
