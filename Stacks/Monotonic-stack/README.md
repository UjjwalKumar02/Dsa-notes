# Notes

#### 1. Infix to Postfix

- stack = []
- Loop thru the string
- if it is a "char" ==> then add to result

- if it is Opening tag ==> add to stack

- if it closing tag
  - loop until Opening tag is found
  - add to res
  - at last also pop the opening tag

- else add the higher preccedence one
- if top has high preccedence then add it to res
- at last push to stack

#### 2. Prefix to Infix

- Loop from end [input = "^b+ab"]
- if "Char" then push to stack
- else pop two elements
- make pattern
- push to stack
- return top

#### Pattern

- pop two elements
- join them with current itr and again push to stack

#### 3. Prefix to PostFix

- same as 2nd

#### 4. PostFix to Prefix

- same as 2nd

#### 5. PostFix to Infix

- same as 2nd

#### 6. Infix to Prefix

- Infix to postfix
- postfix to prefix
