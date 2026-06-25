"use strict";

const sum = async (a, b, c) => a + b + c;

async function main() {
  try {
    const number = 6;
    console.log(`Number: ${number}`);

    const user = {
      a: 1,
      b: 2,
      c: 3,
    };

    const { a, b } = user;
    console.log(`Destructured values: ${a}, ${b}`);

    const numbers = [1, 4, 6];

    const directSum = await sum(numbers[0], numbers[1], numbers[2]);
    const spreadSum = await sum(...numbers);

    console.log(`Direct sum: ${directSum}`);
    console.log(`Spread sum: ${spreadSum}`);
  } catch (error) {
    console.error("Unexpected error:", error);
    process.exitCode = 1;
  }
}

main();
