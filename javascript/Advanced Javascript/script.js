"use strict";

const a1 = 6;
console.log(a1);

const sleep = async (ms = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(45);
    }, ms);
  });

const sum = async (a, b, c) => a + b + c;

async function main() {
  try {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const { a, b } = obj;
    console.log(a, b);

    const arr = [1, 4, 6];

    console.log(await sum(arr[0], arr[1], arr[2]));
    console.log(await sum(...arr));

    // const sleepResult = await sleep();
    // console.log(sleepResult);
  } catch (error) {
    console.error("Error in main():", error);
    process.exitCode = 1;
  }
}

main();
