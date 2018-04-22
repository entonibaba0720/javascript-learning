/*
Javascript exercises on string : Find Palindrome
Get an input from the user and determine whether the string is palindrome.
Palindrome is a word, phrase, or sequence that reads the same backwards as forwards,

Examples of palindrome words “madam”, “level”, “radar”, “noon” and “malayalam”.
*/

var string = prompt("Please give me a world!");
var palindrome = string.split('').reverse().join('');
 if (string==palindrome) {
     alert("This is a palindrome!");
 } else {
     alert("This is not a palindrome!");
 }