console.log("Harry is a hacker");
console.log("Rohan is a hacker");

setTimeout(() => {
  console.log("I am inside setTimeout");
}, 0);

setTimeout(() => {
  console.log("I am inside setTimeout 2");
}, 0);

console.log("The End");

const logMessage = () => {
  console.log("Nothing");
};

const callback = (name, fn) => {
  console.log(name);
  fn();
};

const loadScript = (src, callback) => {
  const script = document.createElement("script");

  script.src = src;

  script.onload = () => {
    callback("Harry", logMessage);
  };

  script.onerror = () => {
    console.error(`Failed to load script: ${src}`);
  };

  document.head.appendChild(script);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback,
);
