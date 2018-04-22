/*
avascript exercises on string : Calculate the length of the string
Get an input from the user using the prompt box and display the length of the string.
e.g “Parvez Ansari” should output will be 13.
Do this by writing your own method. Do not use the string.length property
*/

    var string = prompt("What is your name?");
    var start=0;
    var end = string.length;
    var count = end-start;
    var length = string.substring(start, end);
    alert("Your name is " + count + " charaters length");



  
  




  