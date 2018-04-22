/*
Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22
*/

var today = new Date();
var day = today.getDay();
var days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
console.log("Ma " + days[day] + " van!");
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
console.log("Aktuális idő " + hours + " : " + minutes + " : " + seconds );

