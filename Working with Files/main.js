const fs = require("fs")   // Import the built-in filesystem module
// const fs = require("fs/promises") // Alternative: promise-based version

console.log("starting")    // Log the start of the program

// Write to a file asynchronously (non-blocking)
fs.writeFile("harry2.txt", "Harry is a good boy2", () => {
    console.log("done")    // Runs after writing is complete

    // Read the file asynchronously
    fs.readFile("harry2.txt", (error, data) => {
        console.log(error, data.toString()) // Log any error and file content
    })
})

// Append text to another file asynchronously
fs.appendFile("harry.txt", "harryrobo", (e, d) => {
    console.log(d)         // d is undefined for appendFile, but callback still runs
})

console.log("ending")      // Logs before async operations finish (non-blocking behavior)
