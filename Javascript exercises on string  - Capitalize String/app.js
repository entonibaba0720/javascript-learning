/*
Javascript exercises on string : Capitalize String
Get an input from the user and convert it into Capitalize format.
eg. ‘london’ should return “London”
*/

var word = prompt("Please give me a word!");
var firstToUpperCase  = word.substr(0, 1).toUpperCase() + word.substr(1);


alert(firstToUpperCase);

