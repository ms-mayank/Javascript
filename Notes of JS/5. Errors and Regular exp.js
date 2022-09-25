/*
try {
  
} catch (error) {
  
}finally{
  
}
--------------------------------------------------------------------------
[Regular Expressions]
reg = /text/ =>regular exp are written in between two forward slash
//-functions to match expressions
1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s) => where s =any string
flags:
reg= /text/g => g for global -seach in global, next reg.exec(s) will return next occurance when flag g is set
reg = /text/i => case insensitive - ignore case

2. test() - returns true or false if that search is present or not
let result2 = re.test(s) // s = string

3.match() - it return array of matches results or null; when used with global flag -it will return array, it even checks in substrings
let result3 = reg.match(s) => !!Wrong Syntax
let result3 = s.match(reg) => right syntax 

4.search() - Returns index of first match else -1
let result4 = s.search(reg)

5.replace() - returns new replaced sting with all the replacements
let result5 = s.replace(reg,"new-text") => replace matched string of reg with "new-text"

In regular expersion - global flag is important with all function- if g not set then it will work with first match else if g set then it considers all match even in substrings
-------------------------------------------------------------------------------------
[Regular Expression]//metacharacter symbols
1. /^abc/ => ^More than one match :- expression will match if string starts with abc
2. /abc$/ => $at end :- expression will match if string ends with abc
3. /a.bc/ => .only one match :- matches any one character in between a & bc
4. /a*bc/ => *all match :- matches any 0 or more character in between a & bc
5. /ab?cd?e/ => ?optional match :- question mark represent that character is optional (b? and d? is optional)
6. /a\*bc/ => escape :- use backslash to escape meta character
-------------------------------------------------------------------------------------
[Regular Expression] // characterset
1. /h[a-z]rry/ => can be any character from a to z in between h & rry
2. /h[aty]rry/ => can be an a, t or y in between h and rry
3. /h[^aty]rry/ => can NOT of a, t or y in between h and rry
4. /h[^aty]rr[yu]/ => can NOT of a, t or y in between h and rr + then can be u or y
5. /h[a-zA-Z]rr[yu0-9][0-9]/ => character should have h->any chanracter either capital or small ->rr->either u or y or any number form 0 to 9 -> no from 0to9
** ^^ all e.g are case sensitive; to ignore case use flag /i
------------------------------------------------------------------------------------
[Regular Expression] //quantifiers - no of occurances ^^ previous e.g consists only one character match
1. /har{2}y/ => r can occur exactly 2 times
2. /har{0,2}y/ => r can occur 0 to 2 times (0 or 1 or 2) times
--------------------------------------------------------------------------------
[Regular Expression] //Grouping
1. /(har){2}/ => match har twice: matching string = 'harhar anythign ssfdsdf'
2. /(har){2}([0-9]r){3}/ => match har twice then grouped (any numbered r) comes thrice" = 'harhar1r2r3r'
--------------------------------------------------------------------------------
[Regular Expression] //shorthand character

1. /\war/ => "\w" sirf ek word character jaha ho - _ or alphabet or numbers
2. /\w+d1r/ => "\w+" any number of words then d1r e.g harh7d1r23rff <- harh7d1r will be result
3. /\Wtext/ => "\W" capital W for NOT word character
4. /\W+text/ => any number of NOT word character
5. /\d99/ => '\d' koi bhi ek digit then 99 e.g werd8234899 <- return 899
6. /\d+99/ => '\d+' any no of digit then 99 e.g werd8234899 <- return 8234899 
7. /\D99/ => Not a digit and then 99 e.g sdf99 <- f99
8. /\D+99/ => Any no of not a digit then 99 e.g 87sdfs99 <- sdfs99
9. /\stext/ => \s - one space then text e.g "ab text" <- text {with space}
9. /\s+text/ => \s -any no of white space
9. /\Stext/ => \s - match non whitespace
9. /\S+text/ => \s - any number of Not space then text
10./4r5r\b/ => \b - boundry any other words starts after 4r5r e.g a 4r5r test <- test
---------------------------------------------------------------------------------------
[Regular Expression] //Assertion
1. /h(?=y)/ => wo match jaha h ke baad y ho
1. /h(?!y)/ => wo match jaha h ke baad y NAHI ho


*/
