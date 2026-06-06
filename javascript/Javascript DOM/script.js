console.log("Hello world");

const firstElement = document.body.firstElementChild;

if (!firstElement) {
  console.warn("No first element found in body.");
} else {
  console.log("First Element:", firstElement);
  console.log("Child Nodes:", firstElement.childNodes);
  console.log("Children (HTML elements only):", firstElement.children);
}
