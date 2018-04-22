/*
Javascript exercises on string : Reverse the string
Get an input from the user using the prompt box and reverse the string.
e.g “Parvez” should return “zevrap”.

Write your own method. Do not use the string.reverse() method
*/

var string = prompt("Please give me a world!");

function reverseString(str) {
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    alert (newString);
}
reverseString();