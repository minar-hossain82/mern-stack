// Prints "Hello world" to the browser console
console.log("Hello world");

// Selects the first child element of <body>
// This returns the first HTML element node (ignores text/comment nodes)
document.body.firstElementChild;

// Returns all child nodes of the first element inside <body>
// Includes element nodes, text nodes (like whitespace), and comment nodes
document.body.firstElementChild.childNodes;

// Returns only the child elements of the first element inside <body>
// Ignores text nodes and comments
document.body.firstElementChild.children;
