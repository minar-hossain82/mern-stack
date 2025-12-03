console.log(a1); // Logs the value of a1 (hoisted but undefined here)

(async function main() {
  // Main async IIFE (Immediately Invoked Function Expression)

  // let a = await sleep() // Example of waiting for sleep()
  // console.log(a)
  // let b = await sleep() // Another await example
  // console.log(b);

  // let [x, y, rest] = [1, 5, 7, 8, 9, 10] // Array destructuring example
  // console.log(x, y, rest)

  let obj = {
    a: 1,
    b: 2,
    c: 3,
  }; // Object with three key-value pairs

  let { a, b } = obj; // Object destructuring: extract 'a' and 'b'
  console.log(a, b); // Logs 1 and 2

  let arr = [1, 4, 6]; // Array of three numbers
  console.log(sum(arr[0], arr[1], arr[2])); // Passing elements manually
  console.log(sum(...arr)); // Spread syntax for cleaner passing
})();

var a1 = 6; // Variable declared (hoisted but assigned here)

const sleep = async () => {
  // Returns a promise that resolves after 1 second
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45); // Promise resolved with value 45
    }, 1000);
  });
};

const sum = async (a, b, c) => {
  // Async function returning sum of three values
  return a + b + c;
};
