// Store the number whose factorial will be calculated
let a = 7;

// Function to calculate factorial using Array and reduce
function factorial(number) {
  // Create an array from 0 to number (e.g., [0,1,2,3,...,number])
  let arr = Array.from(Array(number + 1).keys());

  // Remove 0 and multiply all remaining values to get factorial
  let c = arr.slice(1).reduce((a, b) => a * b);

  // Return the final factorial value
  return c;
}

// Function to calculate factorial using a for loop
function facFor(number) {
  // Initialize factorial result as 1
  let fac = 1;

  // Loop from 1 to number and multiply each value
  for (let index = 1; index <= number; index++) {
    fac = fac * index;
  }

  // Return the factorial value
  return fac;
}

// Print factorial using array + reduce method
console.log(factorial(a));

// Print factorial using for loop method
console.log(facFor(a));
