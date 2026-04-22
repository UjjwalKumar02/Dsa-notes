# Notes

#### 1. Infix to Postfix

- st = []
- if it is a "char" ==> then add to result
- if it is Opening tag ==> add to stack
- if it closing tag
- loop until Opening tag is found
- else add the higher preccedence one

#### 2. Prefix to Infix

- if "Char" then push to stack
- else pop two elements
- make pattern
- push to stack
- return top

#### 3. Prefix to PostFix

- same as 2nd

#### 4. PostFix to Prefix

- same as 2nd

#### 5. PostFix to Infix

- same as 2nd

#### 6. Infix to Prefix

- Infix to postfix
- postfix to prefix

#### 7. Pattern

- pop two elements
- join them and again push to stack
