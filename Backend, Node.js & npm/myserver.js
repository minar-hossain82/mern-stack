// Node.js HTTP server example
// Further Reading: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

const http = require("node:http"); // Import the built-in HTTP module

const hostname = "127.0.0.1"; // Localhost IP address
const port = 3000; // Port number on which the server will listen

// Create a server instance
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code 200 = OK
  res.setHeader("Content-Type", "text/plain"); // Set response header to plain text
  res.end("Hello World\n"); // Send response and end the request
});

// Start server and listen on specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); // Log server start message
});
