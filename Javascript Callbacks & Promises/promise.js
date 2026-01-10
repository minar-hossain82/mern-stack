// Log a message to indicate the start of Promises example
console.log("This is Promises");

// Create the first promise
let prom1 = new Promise((resolve, reject) => {
  // Generate a random number between 0 and 1
  let a = Math.random();

  // If the random number is less than 0.5, reject the promise
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    // Otherwise, resolve the promise after 3 seconds
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Harry");
    }, 3000);
  }
});

// Create the second promise
let prom2 = new Promise((resolve, reject) => {
  // Generate a random number between 0 and 1
  let a = Math.random();

  // If the random number is less than 0.5, reject the promise
  if (a < 0.5) {
    reject("No random number was not supporting you 2");
  } else {
    // Otherwise, resolve the promise after 1 second
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Harry 2");
    }, 1000);
  }
});

// Promise.race returns a promise that settles
// as soon as the first promise resolves or rejects
let p3 = Promise.race([prom1, prom2]);

// If the first settled promise is resolved, this runs
p3.then((a) => {
  console.log(a);
})

  // If the first settled promise is rejected, this runs
  .catch((err) => {
    console.log(err);
  });
