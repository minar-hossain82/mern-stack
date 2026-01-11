// Print a message to the console
console.log("Harry is a hacker");

// Print another message to the console
console.log("Rohan is a hecker");

// setTimeout with 0ms delay
// This will be pushed to the event loop and executed after the synchronous code
setTimeout(() => {
  console.log("I am inside settimeout");
}, 0);

// Another setTimeout with 0ms delay
// This will also execute after the synchronous code, in order of registration
setTimeout(() => {
  console.log("I am inside settimeout 2");
}, 0);

// This runs immediately as part of synchronous execution
console.log("The End");

// A simple function that logs a message
const fn = () => {
  console.log("Nothing");
};

// Callback function that takes an argument and a function
// It logs the argument and then calls the passed function
const callback = (arg, fn) => {
  console.log(arg);
  fn();
};

// Function to dynamically load an external script
const loadScript = (src, callback) => {
  // Create a new <script> element
  let sc = document.createElement("script");

  // Set the script source URL
  sc.src = src;

  // When the script loads, execute the callback
  // NOTE: This line immediately calls callback instead of assigning it
  sc.onload = callback("Harry", fn);

  // Append the script to the document head to start loading
  document.head.append(sc);
};

// Call loadScript with a CDN URL and the callback function
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
