// Shows an alert popup with a greeting message
alert("Hello World");

// Logs a message indicating the code is running
console.log("Code is running...");

// Logs another message confirming continued execution
console.log("Code is also running...");

// Logs a fun message about the code
console.log("Code is looking like a wow...");

// Prompts the user to enter a number and stores the input
var a = prompt("Enter your number");

// Shows a confirmation dialog asking the user for confirmation
var isTrue = confirm(
  "Are you sure you want to leave this page and blast your computer "
);

// Checks the user's confirmation response
if (isTrue) {
  // Executes if the user clicks "OK"
  console.log("Computer is blasting");
} else {
  // Executes if the user clicks "Cancel"
  console.log("Computer is not blasting");
}

// Displays the number entered by the user
console.log("Your number is " + a);

// Changes the title of the web page
document.title = "Hey I am good";

// Changes the background color of the page to red (currently disabled)
// document.body.style.backgroundColor = "red";
