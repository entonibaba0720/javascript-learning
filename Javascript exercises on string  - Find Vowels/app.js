/*
Javascript exercises on string : Find Vowels
Get an input from the user and strip out all the vowels.
The letters A, E, I, O, and U are called vowels.

eg. “I Love You” should return “lvy”
*/

var word = prompt("Please give me a word!");
var vowels = ["A","a","E","e","I","i","O","o","U","u"];

var strings = word.replace(/[aeiouAEIOU]/g, '');
alert(strings);

