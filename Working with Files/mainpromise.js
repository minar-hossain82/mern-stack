import fs from "fs/promises"; // Import the promise-based filesystem module

// Read the contents of the file asynchronously
let a = await fs.readFile("harry.txt");

// Append new text to the file asynchronously
let b = await fs.appendFile("harry.txt", "\n\n\n\nthis is amazing promise");

// Print the original file content and the result of appendFile (undefined)
console.log(a.toString(), b);
