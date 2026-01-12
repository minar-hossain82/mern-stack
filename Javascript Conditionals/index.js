// Prints a message to the console
console.log("Hello I am conditional tutorial");

// Declaring a variable 'age' and assigning value 1
let age = 1;

// Declaring another variable 'grace' (currently commented out)
// let grace = 2;

// Performing arithmetic operations with age and grace (commented examples)
// age += grace;          // Adds grace to age and updates age
// console.log(age);      // Prints updated age
// console.log(age + grace); // Addition
// console.log(age - grace); // Subtraction
// console.log(age * grace); // Multiplication
// console.log(age / grace); // Division
// console.log(age ** grace); // Exponentiation
// console.log(age % grace);  // Modulus (remainder)

/*
  This is a
  multiline comment
  used for longer explanations
*/

// Conditional statement to check age
if (age == 18) {
  // Executes if age is exactly 18
  console.log("You can drive");
} else if (age == 0) {
  // Executes if age is 0
  console.log("Are you kidding?");
} else if (age == 1) {
  // Executes if age is 1
  console.log("Are you again kidding?");
} else {
  // Executes if none of the above conditions are true
  console.log("You cannot drive");
}

// Assigning values to variables a and b
a = 6;
b = 8;

// Ternary operator: condition ? true_value : false_value
// If a > b, c = a - b, otherwise c = b - a
let c = a > b ? a - b : b - a;

/*
Equivalent if-else logic:

if (a > b) {
    let c = a - b;
}
else {
    let c = b - a;
}
*/
