"use strict";

const sleep = async (ms = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(45);
    }, ms);
  });
};

const sum = async (a, b, c) => {
  return a + b + c;
};

async function main() {
  try {
    const number = 6;
    console.log(number);

    const obj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const { a, b } = obj;
    console.log(a, b);

    const numbers = [1, 4, 6];

    const result1 = await sum(numbers[0], numbers[1], numbers[2]);
    const result2 = await sum(...numbers);

    console.log(result1);
    console.log(result2);

    // const sleepResult = await sleep();
    // console.log(sleepResult);
  } catch (error) {
    console.error("Error in main():", error);
    process.exitCode = 1;
  }
}

main();
