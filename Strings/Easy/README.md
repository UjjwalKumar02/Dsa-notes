# Revision Notes:

#### 1. Remove outer parentheses:

- Depth variable
- On opening tag: First check then increment
- On closing tag: First decrement then check

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
- return .slice()

#### 4. Longest common prefix:

- Find adjacent common len
- update min len
- cover edge case
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
- Check if present and not equal to
- Set maps

#### 6. Rotate strings:

- Rotation unitl the length of string
- and check if equals to goal

- Rotation in string

```js
str = str.slice(1) + str[0];
```

- `(s+s).includes(goal)`

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
