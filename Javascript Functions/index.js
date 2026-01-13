// Function that takes a name and prints multiple messages using that name
function nice(name) {
  console.log("Hey " + name + " you are nice!");
  console.log("Hey " + name + " you are good!");
  console.log("Hey " + name + " your tshirt is nice!");
  console.log("Hey " + name + " your course is good too!");
}

// Function to calculate the sum of three numbers
// 'c' has a default value of 3 if not provided
function sum(a, b, c = 3) {
  // Log the values of a, b, and c
  console.log(a, b, c);

  // Return the sum of a, b, and c
  return a + b + c;
}

// Calling the sum function with different arguments
// If the third argument is missing, default value (3) is used
result1 = sum(3, 2);
result2 = sum(7, 5);
result3 = sum(3, 13, 1);

// Printing the results to the console
console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);

// Arrow function that prints a message along with the given value
const func1 = (x) => {
  console.log("I am an arrow function", x);
};

// Calling the arrow function with different values
func1(34);
func1(66);
func1(84);
