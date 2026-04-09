console.log("Hello world");

const firstElement = document.body.firstElementChild;

if (firstElement) {
  console.log("First Element:", firstElement);

  const childNodes = firstElement.childNodes;
  console.log("Child Nodes:", childNodes);

  const children = firstElement.children;
  console.log("Children (HTML elements only):", children);
} else {
  console.warn("No first element found in body.");
}
