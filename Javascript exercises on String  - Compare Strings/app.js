/*
Javascript exercises on String : Compare Strings
Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”
*/

var password = prompt("What is your password");
var confirm = prompt("Confirm your password");

if (password === confirm) {
    alert ("Password validates");
} else {
    alert ("Password do not match");
}

   
  