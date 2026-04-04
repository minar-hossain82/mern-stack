console.log("This is Promises");

const prom1 = new Promise((resolve, reject) => {
  const a = Math.random();

  if (a < 0.5) {
    reject("Random number did not support you");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Harry");
    }, 3000);
  }
});

const prom2 = new Promise((resolve, reject) => {
  const a = Math.random();

  if (a < 0.5) {
    reject("Random number did not support you 2");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Harry 2");
    }, 1000);
  }
});

const p3 = Promise.race([prom1, prom2]);

p3.then((res) => console.log(res)).catch((err) => console.log(err));
