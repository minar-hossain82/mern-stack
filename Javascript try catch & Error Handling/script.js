// Ask the user to enter the first number (input is received as a string)
let a = prompt("Enter first number");

// Ask the user to enter the second number (input is received as a string)
let b = prompt("Enter second number");

// Check if either input is not a number
// isNaN() returns true if the value cannot be converted to a number
if (isNaN(a) || isNaN(b)) {
  // Throw a syntax error if invalid input is entered
  throw SyntaxError("Sorry this is not allowed");
}

// Convert both inputs to integers and calculate their sum
let sum = parseInt(a) + parseInt(b);

// Define the main function
function main() {
  // Initialize a variable x with value 1
  let x = 1;

  try {
    // Try block executes code that may cause an error
    console.log("The sum is ", sum * x);

    // Return true if everything works fine
    return true;
  } catch (error) {
    // Catch block runs if an error occurs in try
    console.log("Error aa gaya bhai");

    // Return false if an error happens
    return false;
  } finally {
    // Finally block always executes
    // Used for cleanup tasks like closing files or DB connections
    console.log("files are being closed and db connection is being closed");
  }
}

// Call the main function and store its return value in c
let c = main();
