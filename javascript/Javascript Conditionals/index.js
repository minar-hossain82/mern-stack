console.log("Conditional Tutorial");

const age = 1;

if (age === 18) {
  console.log("You can drive.");
} else if (age === 0) {
  console.log("Are you kidding?");
} else if (age === 1) {
  console.log("Are you kidding again?");
} else {
  console.log("You cannot drive.");
}

const a = 6;
const b = 8;

const difference = a > b ? a - b : b - a;

console.log(`Difference: ${difference}`);
