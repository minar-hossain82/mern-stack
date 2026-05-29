console.log("Promise Race Example");

const promiseOne = new Promise((resolve, reject) => {
  const randomValue = Math.random();

  if (randomValue < 0.5) {
    reject("Random number did not support you");
  } else {
    setTimeout(() => {
      console.log("Promise 1 completed");
      resolve("Harry");
    }, 3000);
  }
});

const promiseTwo = new Promise((resolve, reject) => {
  const randomValue = Math.random();

  if (randomValue < 0.5) {
    reject("Random number did not support you 2");
  } else {
    setTimeout(() => {
      console.log("Promise 2 completed");
      resolve("Harry 2");
    }, 1000);
  }
});

Promise.race([promiseOne, promiseTwo])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
