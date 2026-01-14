// Print a message to the console
console.log("This is strings tutorial");

// Declare a string variable
let a = "Harry";

// Access and print each character of the string using index
console.log(a[0]); // H
console.log(a[1]); // a
console.log(a[2]); // r
console.log(a[3]); // r
console.log(a[4]); // y
// console.log(a[5]); // Undefined because index 5 does not exist

// Print the length of the string
console.log(a.length);

// Declare two string variables
let real_name = "Harry";
let friend = "Rohan";

// String concatenation using + operator
console.log("His name is " + real_name + " and his friends name is " + friend);

// String interpolation using template literals
console.log(`His name is ${real_name} and his friends name is ${friend}`);

// Declare another string
let b = "ShivamSh";

// Convert string to uppercase
console.log(b.toUpperCase());

// Convert string to lowercase
console.log(b.toLowerCase());

// Print length of the string
console.log(b.length);

// Slice the string from index 1 to 4 (5 not included)
console.log(b.slice(1, 5));

// Slice the string from index 1 to the end
console.log(b.slice(1));

// Replace first occurrence of "Sh" with "77"
console.log(b.replace("Sh", "77"));

// Concatenate multiple strings together
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"));

// Print original string to show it is unchanged
console.log(b);
