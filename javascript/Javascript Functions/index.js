function greetUser(name) {
  console.log(`Hey ${name}, you are nice!`);
  console.log(`Hey ${name}, you are good!`);
  console.log(`Hey ${name}, your t-shirt is nice!`);
  console.log(`Hey ${name}, your course is good too!`);
}

function calculateSum(a, b, c = 3) {
  return a + b + c;
}

const sum1 = calculateSum(3, 2);
const sum2 = calculateSum(7, 5);
const sum3 = calculateSum(3, 13, 1);

console.log(`Sum 1: ${sum1}`);
console.log(`Sum 2: ${sum2}`);
console.log(`Sum 3: ${sum3}`);

const printValue = (value) => {
  console.log(`I am an arrow function: ${value}`);
};

printValue(34);
printValue(66);
printValue(84);
