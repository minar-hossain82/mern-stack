console.log("Hello, I am conditional tutorial");

const age = 1;

if (age === 18) {
  console.log("You can drive");
} else if (age === 0) {
  console.log("Are you kidding?");
} else if (age === 1) {
  console.log("Are you again kidding?");
} else {
  console.log("You cannot drive");
}

const a = 6;
const b = 8;

const c = a > b ? a - b : b - a;

console.log("Difference:", c);
